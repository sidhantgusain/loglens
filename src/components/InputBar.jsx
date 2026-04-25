import React from 'react';

function InputBar({ input, setInput, sendMessage, loading, hasValidApiKey, clearChat }) {
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const isDisabled = loading || !hasValidApiKey || !input.trim();

  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '50px 40px',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      minHeight: 'auto',
      flexShrink: 0,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1400px',
        width: '100%',
        padding: '12px 20px',
        borderRadius: '7px',
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border)',
      }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Paste an error log here and press Ctrl+Enter to analyze..."
          style={{
            flex: 1,
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            minHeight: '60px',
            maxHeight: '200px',
            resize: 'none',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            overflow: 'auto',
          }}
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '8px',
          paddingTop: '8px',
          borderTop: '1px solid var(--border)',
        }}>
          <span style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
          }}>
            Ctrl + Enter to analyze
          </span>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            <button
              onClick={clearChat}
              style={{
                padding: '6px 12px',
                borderRadius: '7px',
                border: '1px solid var(--border)',
                backgroundColor: 'transparent',
                color: 'var(--text-muted)',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--accent-blue)';
                e.target.style.color = 'var(--accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.color = 'var(--text-muted)';
              }}
              title="Clears conversation context"
            >
              Clear ✕
            </button>
            <button
              onClick={() => sendMessage()}
              disabled={isDisabled}
              style={{
                padding: '6px 14px',
                borderRadius: '7px',
                border: 'none',
                background: isDisabled
                  ? 'linear-gradient(45deg, #444, #555)'
                  : 'linear-gradient(45deg, var(--accent-blue), var(--accent-purple))',
                color: '#fff',
                fontSize: '12px',
                fontFamily: 'var(--font-body)',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isDisabled ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {loading ? 'Analyzing...' : 'Analyze Error →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBar;
