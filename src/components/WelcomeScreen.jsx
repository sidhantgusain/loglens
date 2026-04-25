import React from 'react';
import { SAMPLE_ERRORS } from '../constants/sampleErrors';

function WelcomeScreen({ setInput, hasValidApiKey }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      gap: '20px',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '56px' }}>🐛</div>
      <h1 style={{
        margin: '0',
        fontSize: '32px',
        fontWeight: '700',
        color: 'var(--text-primary)',
      }}>
        Paste your error log
      </h1>
      <p style={{
        margin: '0',
        fontSize: '14px',
        color: 'var(--text-muted)',
        maxWidth: '400px',
        lineHeight: '1.6',
      }}>
        Paste a terminal error, stack trace, or exception message below and LogLens will analyze it, identify the root cause, and suggest solutions.
      </p>

      {!hasValidApiKey && (
        <div style={{
          fontSize: '12px',
          color: 'var(--red-error)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: '10px',
        }}>
          <span>↑</span>
          <span>Add your Gemini API key above to get started</span>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '10px',
        marginTop: '20px',
        maxWidth: '600px',
      }}>
        {SAMPLE_ERRORS.map((sample, idx) => (
          <button
            key={idx}
            onClick={() => setInput(sample.error)}
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '12px',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--accent-blue)';
              e.target.style.backgroundColor = 'var(--surface)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.backgroundColor = 'var(--surface-2)';
            }}
          >
            {sample.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WelcomeScreen;
