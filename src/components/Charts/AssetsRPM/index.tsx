import { Asset } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import controller from "./controller";
import { useMemo } from "react";

interface AssetsRPMProps {
  assets: Asset[];
}
export const AssetsRPM = ({ assets }: AssetsRPMProps) => {
  const options = useMemo(() => controller.buildOptions(assets), [assets]);

  return <GenericChart options={options} />;
};
