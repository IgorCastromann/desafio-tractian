import { Status } from "@src/services/types";
import { Card, Typography } from "antd";
import styles from "./styles.module.scss";
import activesStore from "@src/store/actives";
import { infoByStatus } from "./utils";

interface StatusCardProps {
  status: Status;
}
export const StatusCard = ({ status }: StatusCardProps) => {
  const { icon, title, type } = infoByStatus[status];

  return (
    <Card
      className={styles.card}
      title={
        <Typography.Title level={5} type={type}>
          {icon} {title}
        </Typography.Title>
      }
    >
      <Typography.Text type={type}>
        {activesStore.getTotalByStatus(status)}
      </Typography.Text>
    </Card>
  );
};
