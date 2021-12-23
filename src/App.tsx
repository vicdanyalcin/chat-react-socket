import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout } from "antd";
import ConversationBox from "./components/ConversationBox";

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

function App() {
  const [conversations, setConversations] = useState<any[]>([]);
  useEffect(() => {
    setConversations(DUMMY_DATA);
  }, []);

  return (
    <div className="App" style={{ height: "100%" }}>
      <Layout>
        <Content className="site-layout">
          <ConversationBox conversations={conversations} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
