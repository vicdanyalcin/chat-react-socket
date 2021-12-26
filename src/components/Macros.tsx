import React from "react";
import { Button, Card, Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Macros = ({ macros, saveSelectedMacro }) => {
  return (
    <div className={"macros"}>
      Macros
      <Button
        style={{ textAlign: "right" }}
        shape="circle"
        type="text"
        icon={<DownOutlined />}
      />
      <Row>
        {macros.map(
          (macro: {
            id: React.Key | null | undefined;
            text:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <Col key={macro.id} xs={4} xl={24}>
              <Card
                className={"macros-card"}
                key={macro.id}
                hoverable={true}
                onClick={() => saveSelectedMacro(macro.id)}
              >
                {macro.text}
              </Card>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Macros;
