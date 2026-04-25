import React, { useEffect, useRef } from 'react';
import WelcomeScreen from './WelcomeScreen';
import MessageUser from './MessageUser';
import MessageAI from './MessageAI';
import ThinkingCard from './ThinkingCard';

function ChatArea({ messages, setInput, sanitizeAndHighlightCode, hasValidApiKey }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const hasMessages = messages.length > 0;

  return (
    <div style={{
      flex: 1,
      overflowY: 'auto',
      padding: hasMessages ? '20px' : '0',
      backgroundColor: 'var(--dark-bg)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {!hasMessages ? (
        <WelcomeScreen setInput={setInput} hasValidApiKey={hasValidApiKey} />
      ) : (
        <>
          {messages.map((msg, idx) => {
            if (msg.role === 'user') {
              return <MessageUser key={idx} content={msg.content} />;
            } else if (msg.role === 'ai') {
              return (
                <MessageAI
                  key={idx}
                  data={msg.data}
                  sanitizeAndHighlightCode={sanitizeAndHighlightCode}
                />
              );
            } else if (msg.role === 'thinking') {
              return <ThinkingCard key={idx} />;
            } else if (msg.role === 'error') {
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: 'rgba(240, 82, 82, 0.1)',
                    border: '1px solid var(--red-error)',
                    borderRadius: '10px',
                    padding: '12px',
                    maxWidth: '85%',
                    marginBottom: '12px',
                  }}
                >
                  <p style={{
                    margin: '0',
                    fontSize: '13px',
                    color: 'var(--red-error)',
                    lineHeight: '1.5',
                  }}>
                    {msg.content}
                  </p>
                </div>
              );
            }
            return null;
          })}

          {messages.length > 0 && messages[messages.length - 1].role === 'ai' && (
            <div style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '12px',
              color: 'var(--text-muted)',
            }}>
              Ask a follow-up — "explain solution 2", "show me the fix in Python", etc.
            </div>
          )}
        </>
      )}
      <div ref={chatEndRef} />
    </div>
  );
}

export default ChatArea;
