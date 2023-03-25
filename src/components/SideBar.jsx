import { forwardRef } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobal } from "../context/context";
const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {
  const { logout } = useAuth0();
  const { setMinutes } = useGlobal();
  return (
    <div ref={ref} className='fixed w-56 h-full bg-white shadow-md'>
      <div className='flex justify-center mt-6 mb-14'>
        <picture>
          <img className='w-32 h-auto' src='/assets/quizz.png' alt='task logo' />
        </picture>
      </div>

      <div className='flex flex-col'>
        <Link
          onClick={() => {
            setShowNav(!showNav);
            setMinutes(9999);
          }}
          to='/'
          className='hover:bg-[#F44033] hover:text-white duration-100 '>
          <div
            className='pl-6 pt-5 pb-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center
              '>
            <div className='mr-2'>
              <HomeIcon className='h-5 w-5' />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link
          onClick={() => setShowNav(!showNav)}
          to='/quizrules'
          className='hover:bg-[#F44033] hover:text-white duration-100 '>
          <div
            className={`pl-6 pt-5 pb-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center
              `}>
            <div className='mr-2'>
              <QuestionMarkCircleIcon className='h-5 w-5' />
            </div>
            <div>
              <p>Quiz</p>
            </div>
          </div>
        </Link>
        <button
          title='Log Out'
          onClick={() => logout()}
          className='hover:bg-[#F44033] hover:text-white duration-100'>
          <div
            className={`pl-6 pt-5 pb-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center  `}>
            <div className='mr-2'>
              <UserIcon className='h-5 w-5' />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
