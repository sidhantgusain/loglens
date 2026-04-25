import React from 'react';

function MessageUser({ content }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '12px',
    }}>
      <div style={{
        maxWidth: '85%',
      }}>
        <div style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          marginBottom: '6px',
          textAlign: 'right',
        }}>
          Error log
        </div>
        <div style={{
          backgroundColor: 'var(--surface-2)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '12px',
        }}>
          <pre style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            lineHeight: '1.5',
            color: 'var(--text-primary)',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            maxHeight: '120px',
            overflowY: 'auto',
          }}>
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default MessageUser;
