import { Active } from "@src/services/types";
import { buildDefaultHighChartsActivesOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class ActivesRPM {
  public buildOptions = (actives: Active[]) =>
    buildDefaultHighChartsActivesOption({
      tooltip: {
        headerFormat: "<span>{series.name}</span><br>",
        pointFormat:
          '<b style="color:{point.color}">{point.name}</b>: <b>{point.y} RPM</b><br/>',
      },
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: actives.map((active) => {
            return {
              name: active.name,
              y: active.specifications.rpm ?? 0,
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

const controller = new ActivesRPM();
export default controller;
