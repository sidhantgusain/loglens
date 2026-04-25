import React from 'react';

function ThinkingCard() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px',
      borderRadius: '10px',
      backgroundColor: 'var(--surface-2)',
      border: '1px solid var(--border)',
      alignSelf: 'flex-start',
      maxWidth: '90%',
    }}>
      <div style={{
        fontSize: '14px',
        color: 'var(--text-muted)',
      }}>
        Analyzing
      </div>
      <div style={{
        display: 'flex',
        gap: '4px',
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-blue)',
              animation: 'pulse 1.4s infinite',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default ThinkingCard;
