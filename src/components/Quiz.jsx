import React from "react";
import { useGlobal } from "../context/context";
import { One, Two } from "./Questions";
import ResultPopup from "./ResultPopup";
import Timer from "./Timer";
const validate = (one, two, setResult, setShowResult) => {
  one && two? setResult(true): setResult(false);
  setShowResult(true);
};
const Quiz = () => {
  const { firstAns, secondAns, setShowResult, setResult } = useGlobal();
  return (
    <>
      <ResultPopup />
      <div className='flex items-center justify-center py-10'>
        <div className='text-3xl font-light'>Time Remaining:</div>
        <div className='p-2 text-5xl w-fit'>
          <Timer />
        </div>
      </div>
      <div className='flex flex-col gap-y-10 pb-20'>
        <One />
        <Two />
        <div className='w-full flex justify-center items-center'>
          <button
            onClick={() =>
              validate(firstAns, secondAns, setResult, setShowResult)
            }
            className='px-3 py-5 bg-green-400 text-white font-semibold text-xl hover:bg-green-500 duration-150 rounded-md'>
            Verify my answers
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
