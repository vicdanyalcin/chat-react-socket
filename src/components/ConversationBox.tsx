import React, { useEffect, useRef } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const ConversationBox = ({ conversations }: any) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  return (
    <>
      <div className={"conversation-box"}>
        <Row>
          <Col span={23}>
            <Typography style={{ textAlign: "left" }}>In progress</Typography>
          </Col>
          <Col span={1}>
            <Button
              style={{ textAlign: "right" }}
              shape="circle"
              type="text"
              icon={<MoreOutlined />}
            />
          </Col>
        </Row>
        <Divider />
        {conversations.map(
          ({
            name,
            message,
            id,
          }: {
            name: string;
            message: string;
            id: number;
          }) => (
            <div
              key={id}
              style={
                name === "mock user"
                  ? { textAlign: "left" }
                  : {
                      textAlign: "right",
                    }
              }
            >
              <p>{name}</p>
              <span
                className={
                  name === "mock user" ? "left-bubble" : "right-bubble"
                }
              >
                {message}
              </span>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default ConversationBox;
