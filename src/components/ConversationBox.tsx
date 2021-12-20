import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Macros from "./Macros";
import MessageInput from "./MessageInput";

const { Title } = Typography;

const MACROS = [
  {
    id: 1,
    text: "Lorem",
  },
  {
    id: 2,
    text: "Lorem",
  },
  {
    id: 3,
    text: "Lorem",
  },
  {
    id: 4,
    text: "Lorem",
  },
];

const ConversationBox = ({ conversations }: any) => {
  const [macros, setMacros] = useState<any[]>([]);

  useEffect(() => {
    setMacros(MACROS);
  }, []);

  return (
    <div>
      <Row>
        <Col span={18}>
          <Title level={2}>In progress</Title>{" "}
          <Button icon={<MoreOutlined />} />
          <Divider />
          {conversations.map((c: any) => (
            <li key={c.senderId}>
              <ul>
                {c.senderId}- {c.text}{" "}
              </ul>
            </li>
          ))}
        </Col>
        <Col span={6}>
          <Macros macros={macros} />
        </Col>
      </Row>
      <MessageInput />
    </div>
  );
};

export default ConversationBox;
