import { navigationData } from "@/constants";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Button } from "./ui/button";

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
    <div className="flex justify-between py-1">
      <div
        className={`fixed top-0 left-0 py-1 w-full border-b border-b-yellow-400
      lg:backdrop-blur-sm `}
      >
        <div className="px-5 lg:px-8 xl:px-10 max-lg:py-4">
          <a className="block xl:mr-8" href="#hero">
            Travelling nemo
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
      <div href="#account" className="z-20 mr-6">
        {/* TODO:account info */}
        <img
          src="/public/assets/profile/default-user.jpg"
          alt="ac"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Header;
