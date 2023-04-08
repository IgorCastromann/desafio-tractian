import * as Highcharts from "highcharts";

export const buildDefaultHighChartsAssetsOption = ({
  ...rest
}: Partial<Highcharts.Options>): Highcharts.Options => ({
  ...defaultOptions,
  ...rest,
});

const defaultOptions: Highcharts.Options = {
  title: {
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
  exporting: {
    enabled: true,
  },
};

export const buildDefaultGaugeHighChartsAssetsOption = ({
  ...rest
}: Partial<Highcharts.Options>): Highcharts.Options => ({
  ...defaultGaugeOptions,
  ...rest,
});

const defaultGaugeOptions: Highcharts.Options = {
  chart: {
    backgroundColor: "white",
    type: "solidgauge",
    width: 300,
    height: 200,
  },
  title: undefined,
  credits: {
    enabled: false,
  },
  pane: {
    center: ["50%", "85%"],
    size: "100%",
    startAngle: -90,
    endAngle: 90,
    background: [
      {
        backgroundColor: "#f7f8fa",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    ],
  },
  exporting: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  yAxis: {
    min: 0,
    max: 4,
    stops: [
      [0.1, "#55BF3B"],
      [0.5, "#DDDF0D"],
      [0.9, "#DF5353"],
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    labels: {
      y: 16,
    },
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
  series: [
    {
      name: "Speed",
      data: [],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<h2 style="font-size:1.8rem; margin-bottom: -0.9rem">{y}</h2><br/>' +
          '<p style="font-size:0.9rem; opacity:0.4">kWh</p>' +
          "</div>",
      },
    },
  ] as unknown as Highcharts.SeriesOptionsType[],
};
