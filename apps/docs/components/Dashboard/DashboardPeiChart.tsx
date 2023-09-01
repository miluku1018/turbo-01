import { useClientAssets } from "@utils/hooks";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const colors = [
  "#5db5dc",
  "#6fbde0",
  "#81c6e4",
  "#93cee8",
  "#a5d6ec",
  "#b7deef",
  "#c9e6f3",
  "#dbeff7",
  "#edf7fb",
  "#a7d5f2",
  "#b1d9f3",
  "#badef5",
  "#c4e3f6",
  "#cee8f8",
  "#d8ecf9",
  "#e2f1fb",
  "#ebf6fc",
  "#f5fafe",
];

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DashboardPeiChart = () => {
  const { data, loading } = useClientAssets();
  const { labels, series } = data?.clientAssets.cryptoAssets
    ? data.clientAssets.cryptoAssets
        .filter((item) => Number(item.totalAmount) !== 0)
        .reduce<{ labels: string[]; series: number[] }>(
          (prev, curr) => {
            const labelVal = `${curr.assetType.name} (${curr.assetType.symbol})`;
            prev["labels"] = [...prev["labels"], labelVal];
            prev["series"] = [...prev["series"], +curr.totalAmount];
            return prev;
          },
          { labels: [], series: [] }
        )
    : { labels: [], series: [] };

  const options: ApexOptions = {
    chart: { id: "DashboardPeiChart" },
    colors: colors,
    labels: labels,
    noData: { text: loading ? "Loading..." : "No Data" },
    legend: { position: "bottom" },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
  };

  console.log("options :", options);
  console.log("series :", series);
  console.log("labels :", labels);
  return (
    <Chart type="donut" height="300px" options={options} series={series} />
  );
};

export default DashboardPeiChart;
