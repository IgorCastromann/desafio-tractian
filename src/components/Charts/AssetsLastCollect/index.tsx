import { Asset } from "@src/services/types";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import controller from "./controller";

export interface AssetsLastCollectProp {
  assets: Asset[];
}
export const AssetsLastCollect = observer(
  ({ assets }: AssetsLastCollectProp) => (
    <section className={styles["collection-date"]}>
      <Typography.Title level={4} style={{ fontWeight: "400" }}>
        Tempo desde a última coleta
      </Typography.Title>
      <div className={styles["collection-date__content"]}>
        {assets.map((asset) => {
          return (
            <div className={styles["collection-date__item"]} key={asset.id}>
              <Typography.Title level={5}>{asset.name}</Typography.Title>
              <Typography.Text>
                {controller.formatDate(asset.metrics.lastUptimeAt)}
              </Typography.Text>
              <Typography.Title level={5}>
                {asset.assignedUserIds.length > 1
                  ? "Responsáveis"
                  : "Responsável"}
              </Typography.Title>
              <Typography.Text
                ellipsis={{
                  tooltip: true,
                }}
              >
                {controller.joinUserNames(asset.assignedUserIds)}
              </Typography.Text>
            </div>
          );
        })}
      </div>
    </section>
  )
);
