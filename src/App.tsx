import React, { useCallback, useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import "./App.css";
import { Col, Layout, Row } from "antd";
import ConversationBox from "./components/ConversationBox";
import Macros from "./components/Macros";
import MessageInput from "./components/MessageInput";
import MACROS from "./components/MACROS";

const { Content } = Layout;

function App() {
  const [state, setState] = useState({ message: "", name: "me" });
  const [conversations, setConversations] = useState<string[]>([]);
  const [selectedMacroId, setSelectedMacroId] = useState<number>();
  const saveSelectedMacro = useCallback((id: number) => {
    setSelectedMacroId(id);
  }, []);
  const socketRef = useRef();

  const mappedMacro = MACROS.filter((macro) => macro.id === selectedMacroId);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:8000");
    socketRef.current.on("message", ({ name, message }) => {
      setConversations([
        ...conversations,
        { name, message, id: Math.random() },
      ]);
    });
    return () => socketRef.current.disconnect();
  }, [conversations]);

  const onInputChange = (e: { target: { name: string; value: string } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (selectedMacroId) {
      setState({ ...state, message: state.message + mappedMacro?.[0].text });
    }
  }, [selectedMacroId]);

  const onSubmit = (e: { preventDefault: () => void }) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  return (
    <div className="App">
      <Layout>
        <Content className="site-layout">
          <Row>
            <Col span={18}>
              <ConversationBox conversations={conversations} />
              <MessageInput
                selectedMacro={state.message}
                onClick={onSubmit}
                onChange={(e: any) => onInputChange(e)}
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
