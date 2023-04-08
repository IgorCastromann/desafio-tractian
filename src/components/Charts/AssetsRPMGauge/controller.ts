import { buildDefaultGaugeHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsRPMGaugeController {
  public buildOptions = (rpm: number) =>
    buildDefaultGaugeHighChartsAssetsOption({
      yAxis: {
        min: 0,
        max: 2000,
        stops: [
          [0.1, "#55BF3B"],
          [0.5, "#DDDF0D"],
          [0.9, "#DF5353"],
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16,
        },
      },
      series: [
        {
          name: "Speed",
          data: [rpm],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<h2 style="font-size:1.8rem; margin-bottom: -0.9rem">{y}</h2><br/>' +
              '<p style="font-size:0.9rem; opacity:0.4">RPM</p>' +
              "</div>",
          },
        },
      ] as SeriesOptionsType[],
    });
}

const controller = new AssetsRPMGaugeController();
export default controller;
