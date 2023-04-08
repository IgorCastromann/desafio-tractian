import { useMemo } from "react";
import { GenericChart } from "../GenericChart";
import controller from "./controller";

interface AssetsRPMGaugeProps {
  rpm: number;
}
export const AssetsRPMGauge = ({ rpm }: AssetsRPMGaugeProps) => {
  const options = useMemo(() => controller.buildOptions(rpm), [rpm]);

  return <GenericChart options={options} />;
};
