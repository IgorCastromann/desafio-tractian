import { Active } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import { useMemo } from "react";
import controller from "./controller";

interface ActivesCollectsProps {
  actives: Active[];
}
export const ActivesCollects = ({ actives }: ActivesCollectsProps) => {
  const options = useMemo(() => controller.buildOptions(actives), [actives]);
  return <GenericChart options={options} />;
};
