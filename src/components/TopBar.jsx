import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function TopBar({ showNav, setShowNav }) {
  const { isAuthenticated, user, logout } = useAuth0();
  return isAuthenticated ? (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] bg-white border-b shadow-sm shadow-gray-200 ${
        showNav ? "pl-56" : ""
      }`}>
      <div className='pl-4 md:pl-16'>
        <Bars3CenterLeftIcon
          className='h-8 w-8 text-gray-700 cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='flex items-center pr-4 md:pr-16'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex w-full justify-center items-center'>
              <picture>
                <img
                  src={user.picture}
                  className='rounded-full h-8 md:mr-4 border-2 border-white shadow-sm'
                  alt='profile picture'
                />
              </picture>
              <span className='hidden md:block font-medium text-gray-700'>
                {user.name}
              </span>
              <ChevronDownIcon className='ml-2 h-4 w-4 text-gray-700' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=75'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'>
            <Menu.Items className='absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm'>
              <div className='p-1'>
                <Menu.Item>
                  <Link
                    href='#'
                    className='flex hover:hover:bg-[#f97c74] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'>
                    <PencilIcon className='h-4 w-4 mr-2' />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='#'
                    className='flex hover:bg-[#f97c74] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'>
                    <Cog8ToothIcon className='h-4 w-4 mr-2' />
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <button
                    title='Log Out'
                    onClick={() => logout()}
                    className='flex w-full hover:hover:bg-[#f97c74] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center'>
                    <UserIcon className='h-4 w-4 mr-2' />
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  ) : (
    <div className='hidden'></div>
  );
}
