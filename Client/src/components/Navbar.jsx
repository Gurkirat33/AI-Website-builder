import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbars = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navigation = [
    {
      title: "Features",
      path: "/features",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav
      className={`fixed left-0 right-0 top-1 z-50 mx-auto max-w-7xl items-center rounded-lg px-4 text-white md:left-8 md:right-8 md:top-2 ${
        isScrolled
          ? "backdrop-blur-lg backdrop-brightness-90"
          : "backdrop-blur-lg backdrop-brightness-90 md:bg-transparent md:backdrop-blur-0 md:backdrop-brightness-100"
      } md:flex md:px-8`}
    >
      <div className="flex items-center justify-between py-3 md:block md:py-5">
        <Link to="/">
          <h2 className="text-2xl font-bold">AI Web Builder</h2>
        </Link>
        <div className="flex md:hidden">
          <button onClick={() => setState(!state)}>
            {state ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${state ? "block" : "hidden"}`}
      >
        <div className="items-center justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, index) => {
            return (
              <Link
                to={item.path}
                onClick={() => setState(!state)}
                className="flex flex-col text-lg font-semibold duration-300"
                key={index}
              >
                {item.title}
              </Link>
            );
          })}
          <span className="hidden h-6 w-px bg-gray-300 md:block"></span>
          <div className="items-center gap-x-4 space-y-3 md:flex md:space-y-0">
            <Link
              to="/login"
              className="block rounded-lg border py-2 text-center font-semibold duration-300 md:border-none md:text-lg"
            >
              Log in
            </Link>
            <Link
              to="/signin"
              className="block rounded-lg p-2 text-center font-semibold duration-300 md:inline md:text-lg"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
