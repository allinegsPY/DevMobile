import React, { FC } from 'react';

interface GlobalButtonProps {
  onPress: () => void;
  title: string;
  margin?: number;
}

const GlobalButton: FC<GlobalButtonProps> = ({ onPress, title, margin = 0 }) => {
  return (
    <button
      style={{
        backgroundColor: '#007AFF',
        padding: '10px 20px',
        borderRadius: '5px',
        margin: `${margin}px`,
      }}
      onClick={onPress}
    >
      {title}
    </button>
  );
};

export default GlobalButton;