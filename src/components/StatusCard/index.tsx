import { Status } from "@src/services/types";
import { Typography } from "antd";
import styles from "./styles.module.scss";
import activesStore from "@src/store/actives";
import { infoByStatus } from "./utils";
import { observer } from "mobx-react-lite";

interface StatusCardProps {
  status: Status;
}
export const StatusCard = observer(({ status }: StatusCardProps) => {
  const { icon, title, type } = infoByStatus[status];
  const isSelected = activesStore.filterByStatus === status;

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => activesStore.setFilter(status)}
    >
      <Typography.Title level={5} type={type}>
        {icon} {title}
      </Typography.Title>
      <Typography.Title level={1} type={type}>
        {activesStore.getTotalByStatus(status)}
      </Typography.Title>
    </div>
  );
});
