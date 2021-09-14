import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";
import {useState, useEffect} from "react";

const data = [
  {name: "Dashboard", value: 30},
  {name: "Purchases", value: 10},
  {name: "Reports", value: 10},
  {name: "Accounts", value: 10},
  {name: "Settings", value: 10},
  {name: "Sales", value: 20},
  {name: "Inventory", value: 10},
  {name: "Returns", value: 10},
  {name: "Employee", value: 10},
];
const COLORS = [
  "#FF6767",
  "#B2DF8A",
  "#E31A1C",
  "#CAB2D6",
  "#1F78B4",
  "#33A02C",
  "#A6CEE3",
  "#FDBF6F",
  "#FF7F00",
];

const PieMap = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <PieChart width={275} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={55}
          outerRadius={70}
          fill='#8884d8'
          paddingAngle={5}
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell
              onMouseEnter={(e) => console.log("e", e)}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomPieTooltip />} />
      </PieChart>
    </>
  );
};

export default PieMap;

const CustomPieTooltip = ({payload}) => {
  return <span> {payload[0] && payload[0].payload.value}</span>;
};
