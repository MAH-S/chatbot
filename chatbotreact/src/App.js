import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { sendMessageToBot } from './api';

function App() {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', user: 'Bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, user: 'You' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    try {
      const response = await sendMessageToBot(input);
      const botReply = { text: response.fulfillmentText, user: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botReply = { text: 'Sorry, something went wrong.', user: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='page'>
      <Navbar />
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
