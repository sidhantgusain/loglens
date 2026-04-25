import React from 'react';
import CopyBtn from './CopyBtn';

function StackTraceCard({ frames }) {
  const copyText = frames
    .map((frame) => {
      const prefix = frame.depth === 0 ? '● ERROR' : `↑ #${frame.depth}`;
      const methodPart = frame.method ? ` in ${frame.method}()` : '';
      return `#${frame.depth} → ${frame.file}:${frame.line}${methodPart}`;
    })
    .join('\n');

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
          <span style={{ fontSize: '16px', color: 'var(--amber-warning)' }}>↺</span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Call Stack
          </span>
        </div>
        <CopyBtn text={copyText} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        {frames.map((frame, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 0',
            borderBottom: idx !== frames.length - 1 ? '1px solid var(--border)' : 'none',
            fontSize: '12px',
          }}>
            <div style={{
              minWidth: '35px',
              textAlign: 'right',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}>
              {frame.depth === 0 ? (
                <span style={{ color: 'var(--red-error)', fontWeight: '600' }}>● ERROR</span>
              ) : (
                <span style={{ color: 'var(--text-muted)' }}>↑</span>
              )}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
            }}>
              <span style={{ color: 'var(--accent-blue)' }}>{frame.file}</span>
              <span style={{ color: 'var(--amber-warning)' }}>:{frame.line}</span>
              {frame.method && (
                <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  in {frame.method}()
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackTraceCard;
