import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Image from 'next/image';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const chatContainer = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

    const response = await axios({
      method: "post",
      url: "/api/recaptchaSubmit",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response?.data?.success === true) {
      console.log(`Success with score: ${response?.data?.score}`);
    } else {
      console.log(`Failure with score: ${response?.data?.score}`);
    }


    // Add the user's message to the messages state
    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // reset input box width
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
    }

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

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = textAreaRef.current;
    if (textarea) {
      setInput(e.target.value);

      // Reset the height to auto to shrink when needed
      textarea.style.height = "auto";

      // Increase the height according to content, with a max height limit
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // max height 200px
    }
  };

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
            <ReactMarkdown className="message" remarkPlugins={[remarkGfm]}>
              {m.content}
            </ReactMarkdown>
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
        <textarea
          ref={textAreaRef}
          name="input-field"
          placeholder="Say anything"
          onChange={handleInputChange}
          value={input}
          disabled={loading}
          style={{ resize: "none" }}
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
