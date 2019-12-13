import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function TabPanel(props) {
  const { value, index, forecastData } = props;

  let getXAxis = list => new Date(list.dt * 1000).toLocaleString();
  let getArea = list => list.main.temp;

  return (
    <Typography component="div" hidden={value !== index}>
      {value === index && (
        <ResponsiveContainer width="100%" height={500} position='relative' >
          <AreaChart
            data={forecastData}
            margin={{
              top: 100,
              left: -30,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={getXAxis} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey={getArea} stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </Typography>
  );
}

export default TabPanel;
