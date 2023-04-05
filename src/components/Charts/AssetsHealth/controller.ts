import { Asset } from "@src/services/types";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class AssetsHealthController {
  public buildOptions = (assets: Asset[]) =>
    buildDefaultHighChartsAssetsOption({
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: assets.map((asset) => {
            return {
              name: asset.name,
              y: asset.healthscore,
            };
          }),
        },
      ] as SeriesOptionsType[],
      title: {
        text: "Saúde dos ativos",
      },
      yAxis: {
        title: {
          text: "Saúde em %",
        },
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y:.1f}%",
          },
        },
      },
      tooltip: {
        headerFormat: "<span>{series.name}</span><br>",
        pointFormat:
          '<b style="color:{point.color}">{point.name}</b>: <b>{point.y:.1f}%</b><br/>',
      },
    });
}

const controller = new AssetsHealthController();
export default controller;
