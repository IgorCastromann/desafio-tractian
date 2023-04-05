import { Active } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import { useMemo } from "react";
import controller from "./controller";

interface ActivesHealthProps {
  actives: Active[];
}
export const ActivesHealth = ({ actives }: ActivesHealthProps) => {
  const options = useMemo(() => controller.buildOptions(actives), [actives]);

  return <GenericChart options={options} />;
};
