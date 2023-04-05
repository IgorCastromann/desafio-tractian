import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

interface GenericChartProps {
  options: Highcharts.Options;
}
Exporting(Highcharts);

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
