import { HealthHistory } from "@src/services/types/assets";
import { HealthStatus } from "@src/services/types";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";
import * as Highcharts from "highcharts";

class AssetsStatusByHourController {
  public buildOptions = (healthHistory: HealthHistory[]) => {
    const { inAlert, unplannedStop, inOperation, plannedStop, inDowntime } =
      this.buildStatusDurationObject(healthHistory);

    return buildDefaultHighChartsAssetsOption({
      chart: {
        type: "bar",
        height: 200,
        borderRadius: 8,
      },
      title: {
        text: "Saúde do ativo em horas por status",
        align: "center",
      },
      xAxis: {
        categories: [
          "Em Alerta",
          "Parada Não Planejada",
          "Em Operação",
          "Parada Planejada",
          "Em Parada",
        ],
      },
      yAxis: {
        min: 0,
        title: {
          text: "Horas",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {
        valueSuffix: " horas",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        enabled: false,
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend?.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: "Tempo",
          data: [inAlert, unplannedStop, inOperation, plannedStop, inDowntime],
        },
      ] as SeriesOptionsType[],
    });
  };

  private buildStatusDurationObject = (data: HealthHistory[]) => {
    let prevStatus: HealthStatus | undefined = undefined;
    let prevTimestamp = new Date(data[0].timestamp);

    const statusDuration: Record<HealthStatus, number> = {
      inAlert: 0,
      plannedStop: 0,
      inOperation: 0,
      unplannedStop: 0,
      inDowntime: 0,
    };

    for (let i = 0; i < data.length; i++) {
      const { status, timestamp } = data[i];
      const currentTimestamp = new Date(timestamp);
      const duration = currentTimestamp.getTime() - prevTimestamp.getTime();
      const durationInHours = duration / (1000 * 60 * 60);

      if (prevStatus) {
        statusDuration[prevStatus] += durationInHours;
      }

      prevStatus = status;
      prevTimestamp = currentTimestamp;
    }

    return statusDuration;
  };
}

const controller = new AssetsStatusByHourController();
export default controller;
