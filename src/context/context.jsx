import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();
const ContextProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(9999);
  const [firstAns, setFirstAns] = useState(false);
  const [secondAns, setSecondAns] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        firstAns,
        setFirstAns,
        secondAns,
        setSecondAns,
        showResult,
        setShowResult,
        quizStarted,
        setQuizStarted,
        result,
        setResult,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobal() {
  return useContext(GlobalContext);
}
export { ContextProvider, GlobalContext };
