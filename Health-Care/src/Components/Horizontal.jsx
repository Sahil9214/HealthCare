import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Text } from "@chakra-ui/react";
const Horizontal = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ width: "40%" }}>
      <Text
        style={{
          fontSize: "22px",
          lineHeight: "32px",
          fontWeight: "900",
          opacity: "0.9",
          margin: "0",

          fontFamily: "DM Sans sans-serif",
          fontStyle: "italic",
          color: "#fff",
        }}
      >
        Show that the Total number of booking present by coustomer
      </Text>
      <Chart
        type="pie"
        width={500}
        height={350}
        series={[41.1, 23.1, 32.1]}
        options={{
          labels: ["week1", "", "Sedentary"],
        }}
      ></Chart>
    </div>
  );
};

export default Horizontal;
