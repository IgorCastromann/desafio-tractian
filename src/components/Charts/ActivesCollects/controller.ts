import { Active } from "@src/services/types";
import { SeriesOptionsType } from "highcharts";

class ActivesCollectsController {
  public buildOptions = (actives: Active[]) => ({
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
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
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
