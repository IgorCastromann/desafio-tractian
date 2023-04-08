import { Image, List, Space, Typography } from "antd";
import styles from "./styles.module.scss";
import {
  Asset,
  healthStatusColor,
  translatedHealthStatus,
} from "@src/services/types";
import { Link } from "react-router-dom";
import {
  FireTwoTone,
  HeartTwoTone,
  SettingTwoTone,
  ThunderboltTwoTone,
  ToolTwoTone,
} from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { IconText } from "@src/components/IconText";

interface AssetsList {
  assets: Asset[];
}
export const AssetsList = observer(({ assets }: AssetsList) => {
  return (
    <List
      itemLayout="vertical"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 2,
        xxl: 3,
      }}
      pagination={{
        pageSize: 6,
      }}
      dataSource={assets}
      renderItem={(item) => <AssetCard item={item} />}
    />
  );
});

interface AssetCardProps {
  item: Asset;
}
const AssetCard = ({ item }: AssetCardProps) => {
  return (
    <Link to={`/assets/${item.id}`}>
      <List.Item
        key={item.id}
        className={styles["list-item"]}
        extra={
          <div className={styles["icons-info"]}>
            <IconText
              icon={<HeartTwoTone twoToneColor="#2ecc71" />}
              text={`${item.healthscore}%`}
              key="health"
            />
            <IconText
              icon={<FireTwoTone twoToneColor="#e74c3c" />}
              text={`${item.specifications.maxTemp}°C`}
              key="temperature"
            />
            <IconText
              icon={<ThunderboltTwoTone twoToneColor="#f1c40f" />}
              text={`${item.specifications.power ?? 0} kWh`}
              key="power"
            />
            <IconText
              icon={<SettingTwoTone />}
              text={`${item.specifications.rpm ?? 0} RPM`}
              key="rpm"
            />
          </div>
        }
      >
        <Space
          align="start"
          direction="horizontal"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Space direction="vertical">
            <Typography.Title level={4}>{item.name}</Typography.Title>
            <Space>
              <ToolTwoTone twoToneColor={healthStatusColor[item.status]} />
              <Typography.Text
                style={{
                  color: healthStatusColor[item.status],
                }}
              >
                {translatedHealthStatus[item.status]}
              </Typography.Text>
            </Space>
          </Space>
          <Image
            width={192}
            height={192}
            src={item.image}
            alt={item.name}
            style={{ objectFit: "cover", borderRadius: "8px" }}
            preview={false}
          />
        </Space>
      </List.Item>
    </Link>
  );
};
