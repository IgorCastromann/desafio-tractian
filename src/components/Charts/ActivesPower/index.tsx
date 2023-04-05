import { Active } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import controller from "./controller";
import { useMemo } from "react";

interface ActivesPowerProps {
  actives: Active[];
}
export const ActivesPower = ({ actives }: ActivesPowerProps) => {
  const options = useMemo(() => controller.buildOptions(actives), [actives]);
  return <GenericChart options={options} />;
};
