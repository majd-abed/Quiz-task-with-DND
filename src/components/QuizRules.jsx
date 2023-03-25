import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../context/context";
const QuizRules = () => {
  const { setMinutes, setSeconds } = useGlobal();
  return (
    <div className='h-[calc(100vh_-_80px)] text-center'>
      <div className='flex flex-col items-center pt-40 pb-10 smx:pt-20'>
        <h1 className='text-5xl italic'>Welcome to our special Quiz!</h1>
        <ul className='text-2xl py-5 list-disc ml-10 text-left'>
          <li>
            <p>Submit your answers before you run out of time!</p>
          </li>
          <li>
            <p>Answer the questions correctly.</p>
          </li>
        </ul>
      </div>
      <Link
        to='/quiz'
        onClick={() => {
          setMinutes(1);
          setSeconds(0);
        }}
        className='px-2 py-3 bg-blue-600 text-white text-2xl rounded-md outline outline-2 hover:outline-blue-600 hover:text-blue-600 hover:bg-white  duration-100'>
        Start my Timer!
      </Link>
    </div>
  );
};

export default QuizRules;
