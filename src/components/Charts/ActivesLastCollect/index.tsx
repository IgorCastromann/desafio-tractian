import { Active } from "@src/services/types";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import controller from "./controller";

export interface ActivesLastCollectProp {
  actives: Active[];
}
export const ActivesLastCollect = observer(
  ({ actives }: ActivesLastCollectProp) => (
    <section className={styles["collection-date"]}>
      <Typography.Title level={4} style={{ fontWeight: "400" }}>
        Tempo desde a última coleta
      </Typography.Title>
      <div className={styles["collection-date__content"]}>
        {actives.map((active) => {
          return (
            <div className={styles["collection-date__item"]} key={active.id}>
              <Typography.Title level={5}>{active.name}</Typography.Title>
              <Typography.Text>
                {controller.formatDate(active.metrics.lastUptimeAt)}
              </Typography.Text>
              <Typography.Title level={5}>
                {active.assignedUserIds.length > 1
                  ? "Responsáveis"
                  : "Responsável"}
              </Typography.Title>
              <Typography.Text
                ellipsis={{
                  tooltip: true,
                }}
              >
                {controller.joinUserNames(active.assignedUserIds)}
              </Typography.Text>
            </div>
          );
        })}
      </div>
    </section>
  )
);
