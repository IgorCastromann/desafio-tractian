import { Active, Status } from "@src/services/types";
import { useMemo } from "react";
import controller from "./controller";
import { Button, Card, Tooltip } from "antd";
import { StatusCard } from "@src/components/StatusCard";
import { GenericChart } from "../GenericChart";
import styles from "./styles.module.scss";
import { observer } from "mobx-react-lite";

interface ActivesStatus {
  actives: Active[];
}
export const ActivesStatus = observer(({ actives }: ActivesStatus) => {
  const options = useMemo(
    () => controller.buildOptions(controller.formattedData),
    [actives]
  );

  return (
    <Card bodyStyle={{ padding: "0" }}>
      <Card.Meta
        description={
          <section className={styles["health-active-section"]}>
            <div className={styles["health-active-section__graph"]}>
              <GenericChart options={options} />
            </div>
            <div className={styles["health-active-section__details"]}>
              {Object.entries(controller.statusCount).map(([res], idx) => (
                <StatusCard status={res as Status} key={idx} />
              ))}
              {controller.hasFiltersActive ? (
                <Tooltip title="Remover os filtros ativos">
                  <Button
                    type="primary"
                    onClick={controller.handleResetFilters}
                    className={styles["clear-filters-button"]}
                  >
                    X
                  </Button>
                </Tooltip>
              ) : null}
            </div>
          </section>
        }
      />
    </Card>
  );
});
