import { Asset } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import controller from "./controller";
import { useMemo } from "react";

interface AssetsPowerProps {
  assets: Asset[];
}
export const AssetsPower = ({ assets }: AssetsPowerProps) => {
  const options = useMemo(() => controller.buildOptions(assets), [assets]);
  return <GenericChart options={options} />;
};
