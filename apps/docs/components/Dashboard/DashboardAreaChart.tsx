import { DateField } from "@components/UI";
import Box from "@mui/material/Box";
import { formatDateTime } from "@utils/format";
import { ApexOptions } from "apexcharts";
import { subDays } from "date-fns";
import { round } from "lodash";
import dynamic from "next/dynamic";
import { useState } from "react";

const style = {
  line: (theme: any) => ({
    width: "14px",
    border: `1px solid ${theme.palette.stroke.main}`,
  }),
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
  },
  input: {
    "& .MuiOutlinedInput-root": {
      maxWidth: "160px",
      height: "44px",
      borderRadius: "8px",
    },
  },
};

const colors = ["#9DD0F0"];

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DashboardAreaChart = () => {
  const now = new Date();
  const [startsAt, setStartsAt] = useState(subDays(now, 7));
  const [endsAt, setEndsAt] = useState(now);
  console.log("startsAt :", startsAt);
  console.log("endsAt :", endsAt);

  const handleStartsAt = (value: Date) => setStartsAt(value);
  const handleEndsAt = (value: Date) => setEndsAt(value);

  // const { data, loading } = useClientAssetsHistories({
  //   variables: {
  //     startsAt: startOfDay(startsAt),
  //     endsAt: endOfDay(endsAt),
  //   },
  // });
  const data = {
    clientAssetsHistories: [
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772969.36268616172634268129904",
        createdAt: "2023-08-24T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772651.15509040589283300478628",
        createdAt: "2023-08-25T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772543.305885095907240349279",
        createdAt: "2023-08-26T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772441.96171108821935774568328",
        createdAt: "2023-08-27T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772615.22919999353126576131812",
        createdAt: "2023-08-28T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100772530.44539371448180396541992",
        createdAt: "2023-08-29T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100773750.85594032803082527906076",
        createdAt: "2023-08-30T00:00:00.000Z",
      },
      {
        __typename: "ClientAssetsHistory",
        auc: "100100773367.6047491849377749522604",
        createdAt: "2023-08-31T00:00:00.000Z",
      },
    ],
  };
  console.log("data :", data);
  const { categories, seriesData } = data?.clientAssetsHistories
    ? data.clientAssetsHistories.reduce<{
        categories: string[];
        seriesData: number[];
      }>(
        (prev, curr) => {
          prev["seriesData"] = [...prev["seriesData"], round(+curr.auc, 4)];
          prev["categories"] = [
            ...prev["categories"],
            formatDateTime(curr.createdAt, "yyyy-MM-dd"),
          ];
          return prev;
        },
        { categories: [], seriesData: [] }
      )
    : { categories: [], seriesData: [] };

  const options: ApexOptions = {
    chart: {
      id: "DashboardAreaChart",
      toolbar: {
        show: false,
        tools: { zoom: false },
      },
    },
    xaxis: {
      type: "datetime",
      tooltip: { enabled: false },
      categories: categories,
    },
    colors: colors,
    legend: { show: false },
    noData: { text: "Test" },
    stroke: { curve: "smooth" },
    tooltip: {
      x: { format: "yyyy-MM-dd" },
      marker: { show: false },
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        return (
          '<section class="wrapper">' +
          '<div style="font-size: 10px; font-weight: 400; color: #A1A1A1;">AUC</div>' +
          '<div style="font-size: 16px; font-weight: 700;">' +
          series[seriesIndex][dataPointIndex] +
          "</div>" +
          '<div style="font-size: 12px; font-weight: 400; color: #A1A1A1;">' +
          formatDateTime(
            w?.config?.xaxis?.categories?.[dataPointIndex],
            "dd MMM"
          ) +
          "</div>" +
          "</section>"
        );
      },
    },
    dataLabels: { enabled: false },
  };

  console.log("options area :", options);
  const series: ApexAxisChartSeries = [
    {
      name: "",
      data: seriesData,
    },
  ];
  console.log("series :", series);
  console.log("seriesData :", seriesData);
  console.log("categories :", categories);

  return (
    <>
      <Box sx={style.wrapper}>
        <DateField
          sx={style.input}
          label="Start"
          value={startsAt}
          minDate={subDays(now, 180)}
          maxDate={endsAt}
          onChange={handleStartsAt}
        />
        <Box sx={style.line} />
        <DateField
          sx={style.input}
          label="End"
          value={endsAt}
          minDate={startsAt}
          maxDate={now}
          onChange={handleEndsAt}
        />
      </Box>

      <Chart type="area" height="250px" options={options} series={series} />
    </>
  );
};

export default DashboardAreaChart;
