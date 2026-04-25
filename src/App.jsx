import React, { useState, useCallback } from 'react';
import TopBar from './components/TopBar';
import ChatArea from './components/ChatArea';
import InputBar from './components/InputBar';
import { SYSTEM_PROMPT } from './constants/systemPrompt';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [messages, setMessages] = useState([]); // { role: 'user'|'ai'|'thinking'|'error', content?, data? }
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const hasValidApiKey = apiKey.startsWith('AIza') && apiKey.length > 20;

  const sanitizeAndHighlightCode = (text) => {
    // Basic HTML escaping
    const escapedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    // Replace `code` with <code>code</code>
    return escapedText.replace(/`([^`]+)`/g, '<code style="font-family: var(--font-mono); color: var(--green-success); background-color: var(--surface-2); padding: 2px 5px; border-radius: 4px;">$1</code>');
  };

  const sendMessage = useCallback(async (inputText) => {
    const textToSend = inputText !== undefined ? inputText : input;
    if (!textToSend.trim() || !hasValidApiKey) return;

    const userMessage = { role: 'user', content: textToSend };
    
    const newMessages = [...messages, userMessage, { role: 'thinking' }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const conversationHistory = newMessages
      .filter((msg) => msg.role === 'user' || msg.role === 'ai')
      .map((msg) =>
        msg.role === 'user'
          ? { role: 'user', parts: [{ text: msg.content }] }
          : { role: 'model', parts: [{ text: JSON.stringify(msg.data) }] }
      );

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: conversationHistory,
            generationConfig: { temperature: 0.2, maxOutputTokens: 1500 },
          }),
        }
      );

      const data = await response.json();
      let raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      raw = raw.replace(/```json|```/g, '').trim();

      let parsedData;
      try {
        parsedData = JSON.parse(raw);
      } catch (jsonError) {
        throw new Error('Failed to parse AI response. It might not be valid JSON.');
      }

      setMessages((prev) =>
        prev.slice(0, -1).concat({ role: 'ai', data: parsedData })
      );
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages((prev) =>
        prev.slice(0, -1).concat({ role: 'error', content: error.message || 'An unknown error occurred.' })
      );
    } finally {
      setLoading(false);
    }
  }, [apiKey, messages, input, hasValidApiKey]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setInput('');
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <TopBar apiKey={apiKey} setApiKey={setApiKey} hasValidApiKey={hasValidApiKey} />
      <ChatArea messages={messages} setInput={setInput} sanitizeAndHighlightCode={sanitizeAndHighlightCode} hasValidApiKey={hasValidApiKey} />
      <InputBar
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        loading={loading}
        hasValidApiKey={hasValidApiKey}
        clearChat={clearChat}
      />
    </div>
  );
}

export default App;
