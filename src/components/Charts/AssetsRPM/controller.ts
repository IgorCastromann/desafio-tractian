import { Asset } from "@src/services/types";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsRPM {
  public buildOptions = (assets: Asset[]) =>
    buildDefaultHighChartsAssetsOption({
      tooltip: {
        headerFormat: "<span>{series.name}</span><br>",
        pointFormat:
          '<b style="color:{point.color}">{point.name}</b>: <b>{point.y} RPM</b><br/>',
      },
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: assets.map((asset) => {
            return {
              name: asset.name,
              y: asset.specifications.rpm ?? 0,
            };
          }),
        },
      ] as SeriesOptionsType[],
      title: {
        text: "Rotação dos ativos ",
      },
      yAxis: {
        min: 0,
        title: {
          text: "Rotação (RPM)",
        },
      },
    });
}

const controller = new AssetsRPM();
export default controller;
