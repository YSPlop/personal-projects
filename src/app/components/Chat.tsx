import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const chatContainer = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    // Add the user's message to the messages state
    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Clear the input
    setInput('');

    try {
      setLoading(true);

      // Make the POST request to your API route
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from OpenAI API');
      }

      // Get the response message from the AI
      const data = await response.json();

      // Append the AI's response to the messages state
      const aiMessage = { role: 'assistant', content: data.result };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const scroll = () => {
    if (chatContainer.current) {
      const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
      if (scrollHeight >= scrollTop + offsetHeight) {
        chatContainer.current.scrollTo(0, scrollHeight + 200);
      }
    }
  };

  /* const scroll = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }; */

  useEffect(() => {
    scroll();
  }, [messages]);

  const renderResponse = () => {
    return (
      <div className="response">
        {messages.map((m, index) => (
          <div
            key={m.id}
            className={`chat-line ${
              m.role === "user" ? "user-chat" : "ai-chat"
            }`}
          >
            <Image
              className="avatar"
              alt="avatar"
              width={40}
              height={40}
              src={m.role === "user" ? "/user-avatar.jpg" : "/ai-avatar.png"}
            />
            <div style={{ width: "100%", marginLeft: "16px" }}>
              <p className="message">{m.content}</p>
              {index < messages.length - 1 && (
                <div className="horizontal-line" />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={chatContainer} className="chat">
      {renderResponse()}
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          name="input-field"
          type="text"
          placeholder="Say anything"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          disabled={loading}
        />
        <button
          type="submit"
          className={`send-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? <div className="spinner" /> : null}
        </button>
      </form>
    </div>
  );

  
};

export default Chat;
