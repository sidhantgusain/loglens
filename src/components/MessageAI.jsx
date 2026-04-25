import React from 'react';
import RootCauseCard from './RootCauseCard';
import StackTraceCard from './StackTraceCard';
import SolutionsCard from './SolutionsCard';

function MessageAI({ data, sanitizeAndHighlightCode }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '12px',
    }}>
      <div style={{
        maxWidth: '85%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        <RootCauseCard
          text={data.rootCause}
          lang={data.language}
          sanitizeAndHighlightCode={sanitizeAndHighlightCode}
        />
        {data.stackTrace && data.stackTrace.length > 0 && (
          <StackTraceCard frames={data.stackTrace} />
        )}
        {data.solutions && data.solutions.length > 0 && (
          <SolutionsCard
            solutions={data.solutions}
            sanitizeAndHighlightCode={sanitizeAndHighlightCode}
          />
        )}
      </div>
    </div>
  );
}

export default MessageAI;
