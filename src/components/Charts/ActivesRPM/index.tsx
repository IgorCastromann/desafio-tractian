import { Active } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import controller from "./controller";
import { useMemo } from "react";

interface ActivesRPMProps {
  actives: Active[];
}
export const ActivesRPM = ({ actives }: ActivesRPMProps) => {
  const options = useMemo(() => controller.buildOptions(actives), [actives]);

  return <GenericChart options={options} />;
};
