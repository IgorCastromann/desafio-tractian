import { GenericChart } from "@src/components/Charts/GenericChart";
import { HealthHistory } from "@src/services/types";
import { useMemo } from "react";
import controller from "./controller";

interface AssetsHealthHistoryProps {
  healthHistory: HealthHistory[];
}
export const AssetsHealthHistory = ({
  healthHistory,
}: AssetsHealthHistoryProps) => {
  const options = useMemo(
    () => controller.buildOptions(healthHistory),
    [healthHistory]
  );

  return <GenericChart options={options} />;
};
