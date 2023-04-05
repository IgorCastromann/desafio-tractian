import { Asset } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import { useMemo } from "react";
import controller from "./controller";

interface AssetsCollectsProps {
  assets: Asset[];
}
export const AssetsCollects = ({ assets }: AssetsCollectsProps) => {
  const options = useMemo(() => controller.buildOptions(assets), [assets]);
  return <GenericChart options={options} />;
};
