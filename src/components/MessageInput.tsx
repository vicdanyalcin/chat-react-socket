import React from "react";
import { Button, Divider, Input, Row } from "antd";
import {
  PaperClipOutlined,
  PlusCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

const MessageInput = ({ selectedMacro, onClick, onChange }) => {
  return (
    <div className={"message-input"}>
      <Row>
        <TextArea
          size="large"
          name="message"
          value={selectedMacro}
          onChange={onChange}
        />
      </Row>
      <Divider />
      <Row>
        <Button
          style={{ margin: 10, color: "orange" }}
          icon={<PlusCircleOutlined />}
          shape="circle"
          type="text"
        />
        <Button
          shape="circle"
          style={{ margin: 10 }}
          icon={<PaperClipOutlined />}
          type="text"
        />

        <Button
          shape="circle"
          type="text"
          style={{ margin: 10 }}
          icon={<SmileOutlined />}
        />

        <Button
          style={{
            position: "absolute",
            right: "15px",
            margin: "10px",
            background: "#E75823",
          }}
          type="primary"
          onClick={onClick}
        >
          Resolve
        </Button>
      </Row>
    </div>
  );
};

export default MessageInput;
