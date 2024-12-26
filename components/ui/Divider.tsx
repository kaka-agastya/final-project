import React from 'react';

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow border-2 border-gray-300"></div>
      <span className="mx-4 text-white text-2xl bold-20">{text}</span>
      <div className="flex-grow border-2 border-gray-300"></div>
    </div>
  );
};

export default Divider;