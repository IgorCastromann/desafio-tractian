import { HealthHistory } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import { useMemo } from "react";
import controller from "./controller";

interface StatusByHourChartProps {
  healthHistory: HealthHistory[];
}
export const StatusByHourChart = ({
  healthHistory,
}: StatusByHourChartProps) => {
  const options = useMemo(
    () => controller.buildOptions(healthHistory),
    [healthHistory]
  );

  return <GenericChart options={options} />;
};
