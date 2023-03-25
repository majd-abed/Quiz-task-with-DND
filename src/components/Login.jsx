import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return !isAuthenticated ? (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className="flex flex-col justify-center text-xl bg-white p-10 rounded-lg smx:p-5 smx:text-lg">
        <h1 className='font-semibold mb-5 '>Please Login to proceed to the Quiz</h1>
        <button className='bg-blue-400 text-white font-bold rounded-md py-4' title='Log In' onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    </div>
  ) : (
    <div className='hidden'></div>
  );
};

export default Login;
