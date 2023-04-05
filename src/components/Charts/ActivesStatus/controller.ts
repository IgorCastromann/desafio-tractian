import { trantatedHealthStatus } from "@src/services/types/actives";
import { HealthStatus, Status } from "@src/services/types";
import activesStore from "@src/store/actives";
import { buildDefaultHighChartsActivesOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";
import { makeAutoObservable } from "mobx";

class ActivesStatusController {
  public constructor() {
    makeAutoObservable(this);
  }
  public buildOptions = (data: unknown) =>
    buildDefaultHighChartsActivesOption({
      chart: {
        plotShadow: false,
        type: "pie",
        backgroundColor: "white",
        borderRadius: 12,
        width: 400,
        height: 390,
      },
      title: {
        text: "Status dos ativos",
        align: "center",
      },
      tooltip: {
        formatter: function () {
          return `${this.point.name}: ${this.point.percentage?.toFixed(1)}%`;
        },
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            formatter: function () {
              return `${this.point.name}`;
            },
          },
        },
      },
      series: [
        {
          name: "Porcentagem",
          colorByPoint: true,
          size: "50%",
          innerSize: "45%",
          data,
        },
      ] as unknown as SeriesOptionsType[],
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
    });

  public get statusCount() {
    return activesStore.actives.reduce(
      (acc: Record<Status, number>, active) => {
        const status = active.status;
        if (!acc[status]) {
          acc[status] = 0;
        }
        acc[status]++;
        return acc;
      },
      {
        inAlert: 0,
        inOperation: 0,
        inDowntime: 0,
      }
    );
  }

  public get formattedData() {
    return Object.entries(this.statusCount).map(([status, y]) => ({
      name: trantatedHealthStatus[status as HealthStatus],
      y,
    }));
  }

  public handleResetFilters = () => {
    activesStore.setFilter(undefined);
  };

  public get hasFiltersActive() {
    return !!activesStore.filterByStatus;
  }
}

const controller = new ActivesStatusController();
export default controller;
