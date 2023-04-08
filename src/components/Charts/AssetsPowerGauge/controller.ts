import { buildDefaultGaugeHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsPowerGaugeController {
  public buildOptions = (data: number) =>
    buildDefaultGaugeHighChartsAssetsOption({
      series: [
        {
          name: "Speed",
          data: [data],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<h2 style="font-size:1.8rem; margin-bottom: -0.9rem">{y}</h2><br/>' +
              '<p style="font-size:0.9rem; opacity:0.4">kWh</p>' +
              "</div>",
          },
        },
      ] as SeriesOptionsType[],
    });
}

const controller = new AssetsPowerGaugeController();
export default controller;
