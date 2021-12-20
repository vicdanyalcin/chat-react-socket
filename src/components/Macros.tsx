import React from "react";
import { Card } from "antd";

const Macros = ({ macros }) => {
  return (
    <div>
      MACRO COMPONENT
      {macros.map((macro) => (
        <div>{macro.solution}</div>
      ))}
    </div>
  );
};

export default Macros;
