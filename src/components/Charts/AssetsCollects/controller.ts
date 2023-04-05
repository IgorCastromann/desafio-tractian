import { Asset } from "@src/services/types";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsCollectsController {
  public buildOptions = (assets: Asset[]) =>
    buildDefaultHighChartsAssetsOption({
      chart: {
        type: "column",
        backgroundColor: "white",
        borderRadius: 12,
      },
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: assets.map((asset) => {
            return {
              name: asset.name,
              y: asset.metrics.totalCollectsUptime,
            };
          }),
        },
      ] as SeriesOptionsType[],
      title: {
        text: "Total de coletas dos ativos ",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Número de coletas",
        },
      },
    });
}

const controller = new AssetsCollectsController();
export default controller;
