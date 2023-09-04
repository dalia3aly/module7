// Exercise: 7.3.1

import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);
  
  return (
    <EmojiContext.Provider value={{ isHappy, setIsHappy }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};