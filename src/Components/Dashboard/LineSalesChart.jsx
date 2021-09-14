import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ArrowGraph from "Assets/icons/arrowGraph.svg";

const LineSalesChart = () => {
  const data = [
    {
      name: "Jan",
      sales: 0,
    },
    {
      name: "Feb",
      sales: 300,
    },
    {
      name: "Mar",
      sales: 100,
    },
    {
      name: "Apr",
      sales: 400,
    },
    {
      name: "May",
      sales: 100,
    },
    {
      name: "Jun",
      sales: 390,
    },
    {
      name: "Jul",
      sales: 50,
    },
    {
      name: "Aug",
      sales: 490,
    },
    {
      name: "Sep",
      sales: 20,
    },
    {
      name: "Oct",
      sales: 200,
    },
    {
      name: "Nov",
      sales: 370,
    },
    {
      name: "Dec",
      sales: 390,
    },
  ];

  return (
    <h1>
      Monthly Sales Overview
      <ResponsiveContainer width='100%' height={260}>
        <LineChart
          layout='horizontal'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip content={<CustomizedToolTip />} />
          <Line
            type='linear'
            dataKey='sales'
            stroke='#1768AC'
            activeDot={{r: 6, stroke: "#1768AC", fill: "white"}}
          />
        </LineChart>
      </ResponsiveContainer>
    </h1>
  );
};

export default LineSalesChart;

const CustomizedToolTip = ({payload}) => {
  return (
    <div className='line-chart-tooltip'>
      <span>Sales</span>
      <span className='float-end color-primary fw-700'>
        {payload[0] && payload[0].payload.sales} SAR
      </span>
      <div className='mt-15'>
        <div className='d-flex'>
          <img className='graph-icon-line-tooltip' src={ArrowGraph} alt='' />
          <p className='f-12'>10 % Increase from previous month</p>
        </div>
      </div>
    </div>
  );
};
