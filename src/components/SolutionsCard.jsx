import React from 'react';
import CopyBtn from './CopyBtn';

function SolutionsCard({ solutions, sanitizeAndHighlightCode }) {
  const copyText = solutions
    .map((solution, idx) => `${idx + 1}. ${solution}`)
    .join('\n\n');

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
          <span style={{ fontSize: '16px', color: 'var(--green-success)' }}>✦</span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Probable Solutions
          </span>
        </div>
        <CopyBtn text={copyText} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        {solutions.map((solution, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}>
            <div style={{
              minWidth: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, var(--accent-blue), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#fff',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              {idx + 1}
            </div>
            <p
              style={{
                margin: '0',
                fontSize: '13px',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
              }}
              dangerouslySetInnerHTML={{ __html: sanitizeAndHighlightCode(solution) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsCard;
