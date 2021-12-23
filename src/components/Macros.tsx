import React from "react";
import { Card } from "antd";

const Macros = ({ macros }) => {
  return (
    <div style={{ background: "red", height: "100vh" }}>
      MACRO COMPONENT
      {macros.map((macro) => (
        <Card style={{ paddingTop: 10, margin: 20 }} key={macro.id}>
          {macro.text}
        </Card>
      ))}
    </div>
  );
};

export default Macros;
