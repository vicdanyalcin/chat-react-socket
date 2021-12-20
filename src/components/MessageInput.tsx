import React, { useState } from "react";
import { Button, Input } from "antd";
import Picker from "emoji-picker-react";
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
      <p>Message Input</p>
      <TextArea rows={4} />
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
      <Button onClick={handleSend}>Send message</Button>
    </div>
  );
};

export default MessageInput;
