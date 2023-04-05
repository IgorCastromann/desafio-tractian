import { Asset } from "@src/services/types";
import { GenericChart } from "../GenericChart";
import { useMemo } from "react";
import controller from "./controller";

interface AssetsHealthProps {
  assets: Asset[];
}
export const AssetsHealth = ({ assets }: AssetsHealthProps) => {
  const options = useMemo(() => controller.buildOptions(assets), [assets]);

  return <GenericChart options={options} />;
};
