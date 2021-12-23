import React, { useState } from "react";
import { Button, Input, Row } from "antd";
import {
  PaperClipOutlined,
  PlusCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;
const MessageInput = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const handleSend = () => {
    console.log("I will send");
  };

  return (
    <div>
      <Row>
        <TextArea rows={2} />
        {chosenEmoji ? (
          <span>You chose: {chosenEmoji.emoji}</span>
        ) : (
          <span>No emoji Chosen</span>
        )}
      </Row>
      <Row style={{ background: "lightblue" }}>
        <Button style={{ margin: 10 }} icon={<PaperClipOutlined />} />
        <Button style={{ margin: 10 }} icon={<PlusCircleOutlined />} />
        <Button style={{ margin: 10 }} icon={<SmileOutlined />} />

        <Button
          style={{
            position: "absolute",
            right: "15px",
            // border: "3px solid #73AD21",
            margin: "10px",
          }}
          onClick={handleSend}
        >
          Resolve
        </Button>
      </Row>
      {/*<Picker onEmojiClick={onEmojiClick} />*/}
    </div>
  );
};

export default MessageInput;
