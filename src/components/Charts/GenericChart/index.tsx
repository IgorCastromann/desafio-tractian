import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";

Exporting(Highcharts);
highchartsMore(Highcharts);
solidGauge(Highcharts);
interface GenericChartProps {
  options: Highcharts.Options;
}
export const GenericChart = ({ options }: GenericChartProps) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
