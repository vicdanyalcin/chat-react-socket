import React from "react";
import { Button, Card } from "antd";

const Macros = ({ macros, saveSelectedMacro }) => {
  return (
    <div style={{ height: "100vh" }}>
      MACRO COMPONENT
      {macros.map((macro) => (
        <Card style={{ paddingTop: 10, margin: 20 }} key={macro.id}>
          {macro.text}
          <Button onClick={() => saveSelectedMacro(macro.id)}>CHoose</Button>
        </Card>
      ))}
    </div>
  );
};

export default Macros;
