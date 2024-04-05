import { navigationData } from "@/constants";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    console.log(55);
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="flex justify-between ">
      <div
        className={`fixed  backdrop-blur-md top-0 left-0  w-full border-b border-opacity-20 border-b-yellow-400
      lg:py-1 lg:backdrop-blur-sm `}
      >
        <div className="px-5  lg:px-8 xl:px-10 max-lg:py-4">
          <a className="block text-2xl font-thin  xl:mr-8" href="#hero">
            Travelling <span className="text-yellow-500 font-normal">NEMO</span>
          </a>
        </div>
      </div>
      <nav
        className={`${openNavigation ? "flex" : "hidden"}  fixed top-0 left-0 
        right-0 bottom-0 lg:ml-auto lg:static lg:flex  `}
      >
        <div className="relative z-2 flex flex-col items-center  justify-center m-auto lg:flex-row">
          {navigationData.map((item) => (
            <a
              className={`block relative  font-thin text-center text-3xl tracking-wide px-20 py-2
              transition-colors hover:text-yellow-500 
              lg:text-base lg:pt-0 lg:mx-4 lg:p-0
               ${item.url === pathname.hash ? "text-yellow-500" : ""}
               ${item.onlyMobile && "lg:hidden"}
               `}
              key={item.id}
              href={item.url}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
      <SmallDevicesMenu
        onClick={toggleNavigation}
        openNavigation={openNavigation}
      />
      <div
        href="#account"
        className=" hidden z-20 mr-6 cursor-pointer lg:block "
      >
        {/* TODO:account info */}
        <img
          src="/src/assets/profile/default-user.jpg"
          alt="ac"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Header;

const SmallDevicesMenu = ({ onClick, openNavigation }) => {
  return (
    <div
      className={`absolute top-6 right-14  lg:hidden cursor-pointer 
      ${openNavigation ? " -mt-2" : ""}`}
      onClick={onClick}
    >
      <div
        className={`fixed border border-yellow-500 w-10 
      transition-all ${openNavigation ? "rotate-45 mt-4" : ""} `}
      />
      <div
        className={`fixed border border-yellow-500 w-10  mt-2 
       transition-all ${openNavigation ? "hidden" : ""}`}
      />
      <div
        className={`fixed border border-yellow-500 w-10  mt-4
       transition-all ${openNavigation ? "-rotate-45 mt-2" : ""}`}
      />
    </div>
  );
};
