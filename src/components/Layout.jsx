import { useState, Fragment } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Transition } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const {isAuthenticated } = useAuth0();

  return (
    <div className='bg-gray-100'>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter='transform transition duration-[400ms]'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transform duration-[400ms] transition ease-in-out'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'>
        <SideBar showNav={showNav} setShowNav={setShowNav} />
      </Transition>
      <main
        className={` transition-all duration-[400ms] ${
          isAuthenticated ? "pt-20" : "pt-4"
        }`}>
        <div className='px-4 md:px-16'>{children}</div>
      </main>
    </div>
  );
}
