import React from "react";
import { Button, Input, Row } from "antd";
import {
  PaperClipOutlined,
  PlusCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const MessageInput = ({ selectedMacro, onClick }) => {
  return (
    <div>
      <Row>
        <TextArea rows={2} value={selectedMacro} />
      </Row>
      <Row>
        <Button
          style={{ margin: 10, color: "orange" }}
          icon={<PlusCircleOutlined />}
        />
        <Button style={{ margin: 10 }} icon={<PaperClipOutlined />} />

        <Button style={{ margin: 10 }} icon={<SmileOutlined />} />

        <Button
          style={{
            position: "absolute",
            right: "15px",
            margin: "10px",
            background: "orange",
          }}
          onClick={onClick}
        >
          Resolve
        </Button>
      </Row>
    </div>
  );
};

export default MessageInput;
