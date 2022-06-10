import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId?: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((price) => {
                  return {
                    x: new Date(price.time_open),
                    y: [
                      price.open.toFixed(3),
                      price.high.toFixed(3),
                      price.low.toFixed(3),
                      price.close.toFixed(3),
                    ],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
          }}
        />
        // <ApexChart
        //   type="line"
        //   series={[
        //     {
        //       name: "Price",
        //       data: data?.map((price) => price.close) ?? [],
        //     },
        //   ]}
        //   options={{
        //     theme: {
        //       mode: "dark",
        //     },
        //     chart: {
        //       height: 300,
        //       width: 500,
        //       toolbar: {
        //         show: false,
        //       },
        //       background: "transparent",
        //     },
        //     grid: { show: false },
        //     stroke: {
        //       curve: "smooth",
        //       width: 4,
        //     },
        //     yaxis: {
        //       show: false,
        //     },
        //     xaxis: {
        //       axisBorder: { show: false },
        //       axisTicks: { show: false },
        //       labels: { show: false },
        //       type: "datetime",
        //       categories: data?.map((price) => price.time_close),
        //     },
        //     fill: {
        //       type: "gradient",
        //       gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        //     },
        //     colors: ["#0fbcf9"],
        //     tooltip: {
        //       y: {
        //         formatter: (value) => `${value.toFixed(3)}`,
        //       },
        //     },
        //   }}
        // />
      )}
    </div>
  );
}

export default Chart;
