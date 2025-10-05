import { useState, useEffect } from 'react';
import React from 'react';

// A simple cursor component
export const BlinkingCursor: React.FC<{ className?: string }> = ({ className = '' }) => (
  // Fix: Replaced JSX with React.createElement to be valid in a .ts file.
  React.createElement('span', { className: `animate-pulse ${className}` }, '|')
);

export const useTypedText = (fullText: string, speed: number = 50) => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setText('');
    setIsComplete(false);
    
    if (!fullText) {
      setIsComplete(true);
      return;
    };

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText, speed]);
  
  return { text, isComplete };
};