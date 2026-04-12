import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // AI response logic will go here
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1 style={{ color: '#2563eb' }}>AZ Chat</h1>
      <p>By Abbas Jani</p>
      <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', marginBottom: '10px', padding: '10px' }}>
        {messages.map((m, i) => <div key={i}><b>{m.role}:</b> {m.content}</div>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type message..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
