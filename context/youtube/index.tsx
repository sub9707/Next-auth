"use client";
import { createContext, useState } from "react";

const YoutubeContext = createContext({
  input: "",
  setInput: (value: string) => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const YoutubeProvider = ({ children }: Props): JSX.Element => {
  const [input, setInput] = useState("");

  return (
    <YoutubeContext.Provider
      value={{
        input,
        setInput,
      }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export { YoutubeContext, YoutubeProvider };
