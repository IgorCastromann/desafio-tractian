import assetsStore from "@src/store/assets";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { Divider, Empty, Image, List, Progress, Space, Typography } from "antd";
import {
  BankOutlined,
  BlockOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  FireOutlined,
  GlobalOutlined,
  HeartOutlined,
  MonitorOutlined,
  SlidersOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import {
  Asset,
  HealthHistory,
  healthStatusColor,
  translatedHealthStatus,
} from "@src/services/types";
import userStore from "@src/store/user";
import { ReactNode, useEffect } from "react";

import companiesStore from "@src/store/companies";
import unitsStore from "@src/store/units";
import { AssetsPowerGauge } from "@src/components/Charts/AssetsPowerGauge";
import { AssetsRPMGauge } from "@src/components/Charts/AssetsRPMGauge";
import { StatusByHourChart } from "@src/components/Charts/AssetsStatusByHour";
import { AssetsHealthHistory } from "@src/components/Charts/AssetsHealthHistory";
import controller from "./controller";

const AssetsDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    assetsStore.fetchAssets().then(() => {
      setTimeout(() => window.dispatchEvent(new Event("resize"))); // resize chart with data
    });
    userStore.fetchUsers();
    unitsStore.fetchUnits();
    companiesStore.fetchCompanies();
  }, []);

  const asset = assetsStore.getAssetById(Number(id));

  if (!asset) return null;
  return (
    <div className={styles.container}>
      <Sider asset={asset} />
      <div className={styles.content}>
        <Header asset={asset} />
        <Content healthHistory={asset.healthHistory} />
        <Footer
          power={asset.specifications.power}
          rpm={asset.specifications.rpm}
        />
      </div>
    </div>
  );
};

export default observer(AssetsDetails);

interface RowInfoProps {
  icon: ReactNode;
  title: string;
  value: string;
  valueColor?: string;
}
const RowInfo = ({ icon, title, value, valueColor }: RowInfoProps) => {
  return (
    <>
      <Space
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Space>
          {icon}
          {title}
        </Space>
        <Typography.Text
          style={{ opacity: valueColor ? "1" : "0.5", color: valueColor }}
          ellipsis={{
            tooltip: true,
          }}
        >
          {value}
        </Typography.Text>
      </Space>
      <Divider />
    </>
  );
};

interface SiderProps {
  asset: Asset;
}
const Sider = ({ asset }: SiderProps) => {
  return (
    <section
      className={styles.sider}
      style={{
        width: "300px",
        padding: "1rem",
        background: "white",
        borderRadius: "8px",
      }}
    >
      <Image
        width={270}
        height={170}
        src={asset.image}
        alt={asset.name}
        style={{ objectFit: "scale-down", borderRadius: "8px" }}
        preview={false}
      />
      <Typography.Title level={4}>{asset.name}</Typography.Title>
      <List
        itemLayout="vertical"
        dataSource={[asset]}
        renderItem={(item) => (
          <List.Item key={item.id} className={styles["list-item"]}>
            <Space
              direction="vertical"
              style={{
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <RowInfo
                icon={<BlockOutlined />}
                title="Modelo"
                value={item.model}
              />
              <RowInfo
                icon={<SlidersOutlined />}
                title="Sensores"
                value={item.sensors.join(", ")}
              />
              <RowInfo
                icon={<ToolOutlined />}
                title="Status"
                value={translatedHealthStatus[item.status]}
                valueColor={healthStatusColor[item.status]}
              />
              <RowInfo
                icon={<FireOutlined />}
                title="Temperatura máxima"
                value={`${item.specifications.maxTemp}°C`}
              />
              <RowInfo
                icon={<MonitorOutlined />}
                title="Total de coletas"
                value={item.metrics.totalCollectsUptime.toString()}
              />
              <RowInfo
                icon={<ClockCircleOutlined />}
                title="Tempo ligada"
                value={`${item.metrics.totalUptime.toFixed(0)} horas`}
              />
              <RowInfo
                icon={<CalendarOutlined />}
                title="Última coleta"
                value={new Date(item.metrics.lastUptimeAt)
                  .toLocaleDateString("pt-BR", { timeZone: "UTC" })
                  .slice(0, 10)}
              />
            </Space>
          </List.Item>
        )}
      />
    </section>
  );
};

interface FooterProps {
  power: number | undefined;
  rpm: number | undefined;
}
const Footer = observer(({ power, rpm }: FooterProps) => {
  return (
    <Space style={{ width: "100%" }}>
      {power ? (
        <AssetsPowerGauge power={power} />
      ) : (
        <GaugeEmpty description="Métricas de Potência não especificadas para este ativo" />
      )}
      {rpm ? (
        <AssetsRPMGauge rpm={rpm} />
      ) : (
        <GaugeEmpty description="Métricas de Rotação não especificadas para este ativo" />
      )}
    </Space>
  );
});

interface ContentProps {
  healthHistory: HealthHistory[];
}
const Content = observer(({ healthHistory }: ContentProps) => {
  return (
    <div
      style={{
        margin: "1rem 0",
        width: "100%",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AssetsHealthHistory healthHistory={healthHistory} />

      <StatusByHourChart healthHistory={healthHistory} />
    </div>
  );
});

interface HeaderProps {
  asset: Asset;
}
const Header = ({ asset }: HeaderProps) => (
  <Space
    align="start"
    style={{
      background: "white",
      borderRadius: "8px",
      padding: "0.5rem",
      width: "100%",
    }}
  >
    <CardInfo
      icon={<HeartOutlined />}
      title="Score de saúde"
      value={asset.healthscore}
      showProgress
    />
    <Divider type="vertical" style={{ height: "50px" }} />
    <CardInfo
      icon={<BankOutlined />}
      title="Empresa"
      value={controller.getCompanyById(asset.companyId)}
    />
    <Divider type="vertical" style={{ height: "50px" }} />
    <CardInfo
      icon={<GlobalOutlined />}
      title="Unidade"
      value={controller.getUnitById(asset.unitId)}
    />
    <Divider type="vertical" style={{ height: "50px" }} />
    <CardInfo
      icon={<TeamOutlined />}
      title="Responsáveis"
      value={controller.joinUserNames(asset.assignedUserIds)}
    />
  </Space>
);

interface CardInfoProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  valueColor?: string;
  showProgress?: boolean;
}
const CardInfo = ({
  icon,
  title,
  value,
  valueColor,
  showProgress = false,
}: CardInfoProps) => (
  <Space
    style={{
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }}
    direction="vertical"
  >
    <Space>
      {icon}
      {title}
    </Space>
    {showProgress ? (
      <Progress percent={+value} status="active" style={{ width: "150px" }} />
    ) : (
      <Typography.Text
        style={{ opacity: valueColor ? "1" : "0.5", color: valueColor }}
        ellipsis={{
          tooltip: true,
        }}
      >
        {value}
      </Typography.Text>
    )}
  </Space>
);

interface GaugeEmptyProps {
  description: string;
}
const GaugeEmpty = ({ description }: GaugeEmptyProps) => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        width: "350px",
        padding: "1rem",
      }}
      description={description}
    />
  );
};
