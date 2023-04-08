import {
  HealthHistory,
  healthStatusChartValue,
} from "@src/services/types/assets";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType, YAxisOptions } from "highcharts";

class AssetsHealthHistoryController {
  public buildOptions = (healthHistory: HealthHistory[]) => {
    const plotData = this.buildHealthHistoryPlotData(healthHistory);

    return buildDefaultHighChartsAssetsOption({
      chart: {
        type: "spline",
        height: 300,
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
        borderRadius: 8,
      },
      title: {
        text: "Saúde do Ativo",
        align: "center",
      },
      xAxis: {
        type: "datetime",
        labels: {
          overflow: "justify",
          formatter: (date: { value: string | number | Date }) =>
            new Date(date.value)
              .toLocaleDateString("pt-BR", { timeZone: "UTC" })
              .slice(0, 10),
        },
      },
      yAxis: {
        title: {
          text: "Status do ativo",
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        min: 0,
        max: 5,
        alternateGridColor: null,
        labels: {
          enabled: false,
        },
        plotBands: [
          {
            from: 0,
            to: 1,
            color: "rgba(255, 77, 79, 0.1)",
            label: {
              text: "Em Parada",
              style: {
                color: "rgb(255, 77, 79)",
              },
            },
          },
          {
            from: 1,
            to: 2,
            color: "rgba(52, 149, 235, 0.1)",
            label: {
              text: "Parada Planejada",
              style: {
                color: "rgb(52, 149, 235)",
              },
            },
          },
          {
            from: 2,
            to: 3,
            color: "rgba(82, 196, 26, 0.1)",
            label: {
              text: "Em Operação",
              style: {
                color: "rgb(82, 196, 26)",
              },
            },
          },
          {
            from: 3,
            to: 4,
            color: "rgba(250, 2, 2, 0.1)",
            label: {
              text: "Parada Não Planejada",
              style: {
                color: "rgb(250, 2, 2)",
              },
            },
          },
          {
            from: 4,
            to: 5,
            color: "rgba(250, 173, 20, 0.1)",
            label: {
              text: "Em Alerta",
              style: {
                color: "rgb(250, 173, 20)",
              },
            },
          },
        ],
      } as unknown as YAxisOptions,
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      tooltip: {
        formatter: function () {
          const brDate = new Date(this.x as number)
            .toLocaleDateString("pt-BR", { timeZone: "UTC" })
            .slice(0, 10);
          return brDate;
        },
      },
      series: [
        {
          name: "",
          data: plotData,
        },
      ] as SeriesOptionsType[],
      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
      exporting: {
        enabled: false,
      },
    });
  };

  private buildHealthHistoryPlotData = (healthHistory: HealthHistory[]) =>
    healthHistory.map(({ status, timestamp }) => ({
      x: new Date(timestamp).getTime(),
      y: healthStatusChartValue[status],
    }));
}

const controller = new AssetsHealthHistoryController();
export default controller;
