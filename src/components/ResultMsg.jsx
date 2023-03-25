import React from "react";
import { useGlobal } from "../context/context";
import { useAuth0 } from "@auth0/auth0-react";
const ResultMsg = () => {
  const { logout } = useAuth0();
  const { result } = useGlobal();
  return result ? (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex flex-col justify-center text-xl text-white bg-green-500 p-10 rounded-lg smx:p-5 smx:text-lg'>
        <h1 className='font-semibold mb-5 smx:w-52 smx:text-center'>
          Congratulations you have passed the test!
        </h1>
        <button
          onClick={() => logout()}
          className='bg-white text-green-500 font-bold rounded-md py-4 hover:bg-green-100 hover:text-green-600 duration-100'
          title='Log Out'>
          Logout
        </button>
      </div>
    </div>
  ) : (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex flex-col justify-center text-xl text-white bg-red-500 p-10 rounded-lg smx:p-5 smx:text-lg'>
        <h1 className='font-semibold mb-5 '>You failed. Try again!</h1>
        <button
          onClick={() => logout()}
          className='bg-white text-red-500 font-bold rounded-md py-4 hover:bg-red-100 hover:text-red-600 duration-100'
          title='Log Out'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ResultMsg;
