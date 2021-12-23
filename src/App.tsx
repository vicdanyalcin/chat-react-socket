import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Col, Layout, Row } from "antd";
import ConversationBox from "./components/ConversationBox";
import MessageInput from "./components/MessageInput";
import Macros from "./components/Macros";

const { Content } = Layout;

const DUMMY_DATA = [
  {
    senderId: "Jane",
    text: "Lorem ıpsum?",
  },
  {
    senderId: "Mary",
    text: "Dolor sit amöes  ?",
  },
];
const MACROS = [
  {
    id: 1,
    text: "How can I help you?",
  },
  {
    id: 2,
    text: "What about trying the other one?",
  },
  {
    id: 3,
    text: "what does the dog say",
  },
  {
    id: 4,
    text: "How many fingers do I have?",
  },
  {
    id: 5,
    text: "Lorem",
  },
  {
    id: 6,
    text: "Lorem",
  },
];

function App() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [selectedMacroId, setSelectedMacroId] = useState<number>([]);
  const [selectedMacro, setSelectedMacro] = useState<any[]>([]);

  const saveSelectedMacro = useCallback((id: number) => {
    console.log(id);
    setSelectedMacroId(id);
  }, []);

  useEffect(() => {
    setConversations(DUMMY_DATA);
  }, []);
  const mappedMacro = MACROS.filter((x) => x.id === selectedMacroId);
  const handleSend = () => {
    setConversations((conversations) => [
      ...conversations,
      {
        senderId: Math.random(),
        text: mappedMacro[0].text,
        senderName: "Mary",
      },
    ]);
    setTimeout(() => {
      setConversations((conversations) => [
        ...conversations,
        { senderId: Math.random(), text: "Another Text", senderName: "Jane" },
      ]);
    }, 3000);
  };
  return (
    <div className="App" style={{ height: "100%" }}>
      <Layout>
        <Content className="site-layout">
          <Row>
            <Col span={18}>
              <ConversationBox
                conversations={conversations}
                onClick={handleSend}
              />
              <MessageInput
                selectedMacro={selectedMacroId}
                setSelectedMacro={setSelectedMacro}
                onClick={handleSend}
              />
            </Col>
            <Col span={6}>
              <Macros macros={MACROS} saveSelectedMacro={saveSelectedMacro} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
