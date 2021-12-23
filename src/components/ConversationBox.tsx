import React, { useEffect, useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ConversationBox = ({ conversations }: any) => {
  return (
    <>
      <div
        style={{
          padding: 10,
          margin: 10,
          minHeight: 580,
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col span={23}>
            <Title style={{ textAlign: "left" }} level={2}>
              In progress
            </Title>
          </Col>
          <Col span={1}>
            <Button style={{ textAlign: "right" }} icon={<MoreOutlined />} />
          </Col>
        </Row>
        <Divider />
        {conversations.map((c: any) => (
          <li
            key={c.senderId}
            style={
              c?.senderName === "Mary"
                ? { background: "white", textAlign: "left" }
                : {
                    background: "orange",
                    textAlign: "right",
                  }
            }
          >
            <ul>
              {c.senderId}- {c.text}{" "}
            </ul>
          </li>
        ))}
      </div>
    </>
  );
};

export default ConversationBox;
