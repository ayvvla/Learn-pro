import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 140) {
      return setNavBg(true);
    } else return setNavBg(false)
  };
  console.log(navBg)

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  console.log(window.scrollY);

  return (
    <header
      className={` h-full min-h-[60px] max-w-[100vh] border-b border-gray-200 py-10 overflow-hidden`}
    >
      <div className={`${navBg ? "bg-white" : "bg-none"} fixed left-0 right-0 top-0 z-20 w-full py-5` }>
        <nav className="mx-10 flex items-center justify-between text-center">
          <div className="flex w-1/4 items-center space-x-2">
            <img src={logo} alt="learn-pro logo" className="h-10 w-10" />
            <span className="whitespace-nowrap text-xl font-bold text-primary">
              Learn-Pro
            </span>
          </div>

          <div
            className="z-30 block cursor-pointer md:hidden"
            onClick={() => setShowNav((pre) => !pre)}
          >
            {showNav ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>

          <ul
            className={`absolute bottom-0 top-0 flex w-[70%] flex-col items-baseline space-y-10 bg-primary py-20 pb-12 pl-10 text-xl font-semibold md:static md:flex md:h-0 md:w-2/4 md:flex-row md:items-center md:justify-around md:space-y-0 md:py-0 md:pb-0 md:pl-0 md:text-base md:font-normal ${showNav ? "right-0 h-[100vh]" : "right-[-990px]"}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Instructors</a>
            </li>
            <li>
              <a href="#">Testimonials</a>{" "}
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="ml-4 hidden w-1/4 justify-end space-x-1 md:flex md:space-x-4">
            <button
              type="button"
              className="self-center rounded-lg border border-primary bg-white px-4 py-1 text-center text-sm font-medium text-primary hover:bg-primary/90"
            >
              Login
            </button>
            <button
              type="button"
              className="self-center text-wrap rounded-lg border border-primary bg-primary px-4 py-1 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none"
            >
              <span className="text-ellipsis whitespace-nowrap">Sign Up</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
