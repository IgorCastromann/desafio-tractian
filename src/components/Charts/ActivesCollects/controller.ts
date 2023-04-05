import { Active } from "@src/services/types";
import { buildDefaultHighChartsActivesOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";

class ActivesCollectsController {
  public buildOptions = (actives: Active[]) =>
    buildDefaultHighChartsActivesOption({
      chart: {
        type: "column",
        backgroundColor: "white",
        borderRadius: 12,
      },
      series: [
        {
          name: "Ativos",
          colorByPoint: true,
          data: actives.map((active) => {
            return {
              name: active.name,
              y: active.metrics.totalCollectsUptime,
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

const controller = new ActivesCollectsController();
export default controller;
