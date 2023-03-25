import React from "react";
import { useGlobal } from "../context/context";
import ResultMsg from "./ResultMsg";

const ResultPopup = () => {
  const { showResult } = useGlobal();
  return showResult ? <ResultMsg /> : <div className='hidden'></div>;
};

export default ResultPopup;
