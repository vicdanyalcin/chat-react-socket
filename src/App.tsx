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
    <div className="App">
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <ConversationBox conversations={conversations} />
          </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
      </Layout>
    </div>
  );
}

export default App;
