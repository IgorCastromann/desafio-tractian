import { Status } from "@src/services/types";
import { Typography } from "antd";
import styles from "./styles.module.scss";
import assetsStore from "@src/store/assets";
import { infoByStatus } from "./utils";
import { observer } from "mobx-react-lite";

interface StatusCardProps {
  status: Status;
}
export const StatusCard = observer(({ status }: StatusCardProps) => {
  const { icon, title, type } = infoByStatus[status];
  const isSelected = assetsStore.filterByStatus === status;

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => assetsStore.setFilter(status)}
    >
      <Typography.Title level={5} type={type}>
        {icon} {title}
      </Typography.Title>
      <Typography.Title level={1} type={type}>
        {assetsStore.getTotalByStatus(status)}
      </Typography.Title>
    </div>
  );
});
