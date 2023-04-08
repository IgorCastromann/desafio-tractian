import { useMemo } from "react";
import { GenericChart } from "../GenericChart";
import controller from "./controller";

interface AssetsPowerGaugeProps {
  power: number;
}
export const AssetsPowerGauge = ({ power }: AssetsPowerGaugeProps) => {
  const options = useMemo(() => controller.buildOptions(power), [power]);

  return <GenericChart options={options} />;
};
