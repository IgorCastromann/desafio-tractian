import * as Highcharts from "highcharts";

export const buildDefaultHighChartsActivesOption = ({
  ...rest
}: Partial<Highcharts.Options>): Highcharts.Options => ({
  ...defaultOptions,
  ...rest,
});

const defaultOptions: Highcharts.Options = {
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    type: "category",
  },
  tooltip: {
    headerFormat: "<span>{series.name}</span><br>",
    pointFormat:
      '<b style="color:{point.color}">{point.name}</b>: <b>{point.y}</b><br/>',
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
  series: [],
  chart: {
    type: "column",
    backgroundColor: "white",
    borderRadius: 12,
  },
  accessibility: {
    announceNewData: {
      enabled: true,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
};
