import { translatedHealthStatus } from "@src/services/types/assets";
import { HealthStatus, Status } from "@src/services/types";
import assetsStore from "@src/store/assets";
import { buildDefaultHighChartsAssetsOption } from "@src/utils/chart";
import { SeriesOptionsType } from "highcharts";
import { makeAutoObservable } from "mobx";

class AssetsStatusController {
  public constructor() {
    makeAutoObservable(this);
  }
  public buildOptions = (data: unknown) =>
    buildDefaultHighChartsAssetsOption({
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
    return assetsStore.assets.reduce(
      (acc: Record<Status, number>, asset) => {
        const status = asset.status;
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
      name: translatedHealthStatus[status as HealthStatus],
      y,
    }));
  }

  public handleResetFilters = () => {
    assetsStore.setFilter(undefined);
  };

  public get hasFiltersActive() {
    return !!assetsStore.filterByStatus;
  }
}

const controller = new AssetsStatusController();
export default controller;
