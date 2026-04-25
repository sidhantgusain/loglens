import React, { useState } from 'react';

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: 'none',
        border: 'none',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 8px',
        borderRadius: '5px',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => e.target.style.color = 'var(--accent-blue)'}
      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
    >
      {copied ? '✓ copied' : 'Copy'}
    </button>
  );
}

export default CopyBtn;
