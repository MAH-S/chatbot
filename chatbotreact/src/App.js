import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';


function App() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', user: 'Bot' },
    { text: 'I need some information.', user: 'You' },
    { text: 'Sure, what do you need to know?', user: 'Bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, user: 'You' };
    const botReply = { text: 'This is a dummy response.', user: 'Bot' };

    setMessages([...messages, newMessage, botReply]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='page'>
      <Navbar/>
    <div className="App">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'You' ? 'user' : 'bot'}`}>
            <strong>{msg.user}: </strong>{msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
}

export default App;
