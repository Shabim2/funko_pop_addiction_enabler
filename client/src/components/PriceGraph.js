import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box className="custom-tooltip" p={3} backgroundColor={"#cfcfcf"} opacity={0.8}>
        <Text className="date-tooltip">{`Date: ${label}`}</Text>
        <Text className="price-tooltip">{`Price: $${payload[0].value}`}</Text>
      </Box>
    );
  }

  return null;
};

export default class PriceGraph extends Component {
  renderGraph = () => {
    const { currentVariant } = this.props;
    const dates = Object.keys(currentVariant.price);
    const prices = Object.values(currentVariant.price);
    let dataset = [];

    for (let i = 0; i < dates.length; i++) {
      const obj = { date: dates[i].slice(0, -5), price: prices[i] };
      dataset.push(obj);
    }
    
    const min = Math.min(...prices) - 1;
    const max = Math.max(...prices) + 1;

    return (
      <LineChart width={650} height={325} data={dataset}>
        <CartesianGrid strokeDasharray="1" />
        <XAxis
          dataKey="date"
          tickCount={dataset.length}
          label={{ value: "Date", offset: "-5", position: "insideBottom" }}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          type="number"
          label={{ value: "Price ($)", angle: -90, offset: "20", position: "insideLeft" }}
          domain={[min, max]}
          tickCount={dataset.length}
          padding={{ top: 20, bottom: 20 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="linear" dataKey="price" stroke="#1a188c" activeDot={{ r: 8 }} />
      </LineChart>
    );
  };
  render() {
    return this.renderGraph();
  }
}
