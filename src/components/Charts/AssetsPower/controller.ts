import { Asset } from "@src/services/types";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsPowerController {
  public buildOptions = (assets: Asset[]) =>
    buildDefaultHighChartsAssetsOption({
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: assets.map((asset) => {
            return {
              name: asset.name,
              y: asset.specifications.power ?? 0,
            };
          }),
        },
      ] as SeriesOptionsType[],
      title: {
        text: "Potência dos ativos ",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Potência (kWh)",
        },
      },
      tooltip: {
        headerFormat: "<span>{series.name}</span><br>",
        pointFormat:
          '<b style="color:{point.color}">{point.name}</b>: <b>{point.y} kWh</b><br/>',
      },
    });
}

const controller = new AssetsPowerController();
export default controller;
