import React, { useState, createContext } from "react";

const sampleContext = {
    count: 0,
    incrementCount: () => {},
    decrementCount: () => {},
}

const CountContext = createContext(sampleContext);

interface ICountProvider {
    children: React.ReactNode;
}

export const CountProvider = ({ children }: ICountProvider) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;