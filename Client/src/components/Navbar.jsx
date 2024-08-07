import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { navigation } from "../data/NavbarData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { clearUser } from "../redux/slices/user.slice";

const Navbars = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleLogoutBtn = async () => {
    try {
      await axios.get("/api/v1/user/logout-user");
      toast.success("Logged out successfully");
      dispatch(clearUser());
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-[1000] flex h-full w-full flex-wrap items-center justify-center overflow-auto p-4 font-[sans-serif] before:fixed before:inset-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="float-right w-3.5 shrink-0 cursor-pointer fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
              onClick={() => setShowModal(false)}
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>

            <div className="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-14 fill-red-500"
                viewBox="0 0 286.054 286.054"
              >
                <path
                  fill="#e2574c"
                  d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.209-52.026-116.209-116.209S78.844 26.818 143.027 26.818s116.209 52.026 116.209 116.209-52.026 116.209-116.209 116.209zm.009-196.51c-10.244 0-17.995 5.346-17.995 13.981v79.201c0 8.644 7.75 13.972 17.995 13.972 9.994 0 17.995-5.551 17.995-13.972V76.707c-.001-8.43-8.001-13.981-17.995-13.981zm0 124.997c-9.842 0-17.852 8.01-17.852 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.001-9.851-8.001-17.86-17.843-17.86z"
                  data-original="#e2574c"
                />
              </svg>

              <h4 className="mt-6 text-lg font-semibold text-gray-800">
                Do you really want to log out?
              </h4>
              <p className="mt-2 text-sm text-gray-500">Are you sure?</p>
            </div>

            <div className="flex gap-4 max-sm:flex-col">
              <button
                type="button"
                className="w-full rounded-lg border-none bg-gray-200 px-5 py-2.5 text-sm tracking-wide text-gray-800 outline-none hover:bg-gray-300"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
              <button
                type="button"
                className="w-full rounded-lg border-none bg-red-500 px-5 py-2.5 text-sm tracking-wide text-white outline-none hover:bg-red-600"
                onClick={handleLogoutBtn}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
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
            {user ? (
              <div className="items-center gap-x-4 space-y-3 md:flex md:space-y-0">
                <Link
                  to="/dashboard"
                  className="block rounded-lg border py-2 text-center font-semibold duration-300 md:border-none md:text-lg"
                >
                  Dashboard
                </Link>
                <p
                  className="block cursor-pointer rounded-lg p-2 text-center font-semibold duration-300 md:inline md:text-lg"
                  onClick={() => setShowModal(true)}
                >
                  Logout
                </p>
              </div>
            ) : (
              <div className="items-center gap-x-4 space-y-3 md:flex md:space-y-0">
                <Link
                  to="/login"
                  className="block rounded-lg border py-2 text-center font-semibold duration-300 md:border-none md:text-lg"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block rounded-lg p-2 text-center font-semibold duration-300 md:inline md:text-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbars;
