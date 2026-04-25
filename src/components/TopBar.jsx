import React from 'react';

function TopBar({ apiKey, setApiKey, hasValidApiKey }) {
  return (
    <div style={{
      height: '56px',
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          background: 'linear-gradient(45deg, var(--accent-blue), var(--accent-purple))',
          borderRadius: '7px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: 'var(--text-primary)',
        }}>
          🔍
        </div>
        <div style={{ lineHeight: '1.2' }}>
          <div style={{ fontSize: '18px', fontWeight: '700' }}>LogLens</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>AI Error Analyzer</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Paste your Gemini API key…"
          style={{
            width: '220px',
            padding: '8px 12px',
            borderRadius: '7px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--surface-2)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            outline: 'none',
          }}
        />
        <span style={{
          fontSize: '12px',
          color: hasValidApiKey ? 'var(--green-success)' : 'var(--red-error)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}>
          <span style={{
            fontSize: '16px',
            lineHeight: '1',
          }}>
            {hasValidApiKey ? '●' : '○'}
          </span>
          {hasValidApiKey ? 'Connected' : 'No key'}
        </span>
      </div>
    </div>
  );
}

export default TopBar;
