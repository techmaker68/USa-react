import {PieChart, Pie, Cell, Tooltip} from "recharts";
import {useState} from "react";

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
          innerRadius={45}
          outerRadius={60}
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
  return (
    <div className='custom-pie-tooltip'>
      <div className='d-flex justify-content-between'>
        <h1 className='f-14 fw-500'>Dashboard</h1>
        <div className='f-14 fw-500 color-success'>30%</div>
      </div>
      <p className='f-12 color-gray mb-2'>Breakdown</p>
      <div className='d-flex justify-content-between'>
        <div>
          <p className='f-12 m-0'>Delivery</p>
          <p className='f-12 mb-1'>PowerBI</p>
        </div>
        <div>
          <p className='f-12 m-0  color-success'>20%</p>
          <p className='f-12 m-0  color-danger'>10%</p>
        </div>
      </div>
      {/* <span>{payload[0] && payload[0].payload.value}</span> */}
    </div>
  );
};
