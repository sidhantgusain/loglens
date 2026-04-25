import React from 'react';
import CopyBtn from './CopyBtn';

function RootCauseCard({ text, lang, sanitizeAndHighlightCode }) {
  return (
    <div style={{
      backgroundColor: 'var(--surface-2)',
      border: '1px solid var(--border)',
      borderRadius: '10px',
      padding: '14px',
      marginBottom: '10px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
        paddingBottom: '10px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '16px', color: 'var(--red-error)' }}>⚠</span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Root Cause
          </span>
          {lang && (
            <span style={{
              fontSize: '11px',
              backgroundColor: 'var(--accent-blue)',
              color: 'var(--dark-bg)',
              padding: '3px 8px',
              borderRadius: '12px',
              fontWeight: '600',
            }}>
              {lang}
            </span>
          )}
        </div>
        <CopyBtn text={text} />
      </div>
      <p style={{
        margin: '0',
        fontSize: '14px',
        lineHeight: '1.65',
        color: 'var(--text-primary)',
      }}
      dangerouslySetInnerHTML={{ __html: sanitizeAndHighlightCode(text) }}
      />
    </div>
  );
}

export default RootCauseCard;
