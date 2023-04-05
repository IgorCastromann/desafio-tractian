import { Active } from "@src/services/types";
import { buildDefaultHighChartsActivesOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class ActivesPowerController {
  public buildOptions = (actives: Active[]) =>
    buildDefaultHighChartsActivesOption({
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: actives.map((active) => {
            return {
              name: active.name,
              y: active.specifications.power ?? 0,
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

const controller = new ActivesPowerController();
export default controller;
