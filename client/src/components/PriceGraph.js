// @ts-nocheck
import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import theme from "../theme";
import withColorMode from "./withColorMode";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        className="custom-tooltip"
        p={3}
        backgroundColor="#cfcfcf"
        opacity={0.7}
        borderColor={theme.colors.customColors.royalDarkBlue}
      >
        <Text className="date-tooltip" textColor={"black"}>{`Date: ${label}`}</Text>
        <Text
          className="price-tooltip"
          textColor={"black"}
        >{`Price: $${payload[0].value}`}</Text>
      </Box>
    );
  }

  return null;
};
class PriceGraph extends Component {
  renderGraph = () => {
    const { fontColor } = this.props;
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
      <LineChart width={650} height={350} data={dataset}>
        <CartesianGrid strokeDasharray="1" fill={"#fff"} />
        <XAxis
          dataKey="date"
          tickCount={dataset.length}
          label={{ value: "Date", offset: "-5", position: "insideBottom", fill: fontColor}}
          padding={{ left: 20, right: 20 }}
          tick={{ fill: fontColor }}
          tickLine={{ stroke: fontColor, fill: fontColor }}
        />
        <YAxis
          type="number"
          label={{
            value: "Price ($)",
            angle: -90,
            offset: "20",
            position: "insideLeft",
            fill: fontColor,
          }}
          domain={[min, max]}
          tickCount={dataset.length}
          padding={{ top: 20, bottom: 20 }}
          tick={{ fill: fontColor }}
          tickLine={{ stroke: fontColor, fill: fontColor }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="linear"
          dataKey="price"
          stroke={theme.colors.customColors.royalDarkBlue}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  };
  render() {
    return this.renderGraph();
  }
}

export default withColorMode(PriceGraph);
