import { Active } from "@src/services/types";
import { buildDefaultHighChartsActivesOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class ActivesHealthController {
  public buildOptions = (actives: Active[]) =>
    buildDefaultHighChartsActivesOption({
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: actives.map((active) => {
            return {
              name: active.name,
              y: active.healthscore,
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

const controller = new ActivesHealthController();
export default controller;
