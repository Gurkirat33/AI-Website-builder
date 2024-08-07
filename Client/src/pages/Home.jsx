import { Link } from "react-router-dom";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-primary-800 bg-[url('./assets/hero-bg.svg')] pt-16 md:pt-24">
        <div className="section-container text-white">
          <div className="hidden justify-center md:mt-2 md:flex lg:mt-6">
            <div className="group relative">
              <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-secondary-600 to-tertiary-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
                <span className="flex items-center space-x-5">
                  <svg
                    className="-mr-2 h-6 w-6 text-secondary-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm8 4h4m-2-2v4m-4-4v4m-2-2h4m-4-6h8m-4 4v4m4-4v4"
                    />
                  </svg>
                  <span className="pr-6 text-gray-100">
                    Revolutionize Your Web Presence with AI
                  </span>
                </span>
                <span className="pl-6 text-tertiary-400 transition duration-200 group-hover:text-gray-100">
                  Explore AI Features &rarr;
                </span>
              </button>
            </div>
          </div>
          <div className="relative my-6 mt-4 space-y-2 sm:my-8 sm:space-y-4 md:mt-10 md:space-y-6">
            <div className="absolute bottom-0 left-0 hidden size-80 rounded-full bg-gradient-to-bl from-secondary-600 to-tertiary-600 opacity-20 blur-3xl sm:block"></div>
            <div className="absolute right-0 top-0 size-80 rounded-full bg-gradient-to-tr from-secondary-600 to-tertiary-600 opacity-20 blur-3xl"></div>
            <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-secondary-600">AI</span>-Driven{" "}
              <span className="text-secondary-600">Innovation</span> in Web
              Design
            </h1>
            <p className="mx-auto mb-6 max-w-2xl py-3 text-center text-slate-300 sm:py-0 lg:text-lg">
              Create stunning websites effortlessly with our advanced AI
              technology. Experience the future of web design with tools that
              make your ideas come to life.
            </p>
            <div className="flex flex-col justify-center gap-2 text-center sm:flex-row sm:gap-4">
              <Link
                to="/"
                className="rounded-lg bg-secondary-600 px-4 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:bg-secondary-700 sm:px-6 sm:py-3"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="rounded-lg border-2 border-tertiary-600 bg-transparent px-4 py-2 text-tertiary-600 transition duration-300 hover:bg-tertiary-600 hover:text-white sm:px-6 sm:py-3"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-4xl">
            <div className="relative z-10 flex w-full overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
              <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#0052CC_20deg,transparent_120deg)]"></div>
              <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
                <img
                  src="https://cdn.dribbble.com/userupload/11165619/file/original-65633598cd68164c2bb35d578a5117c2.png?crop=0x0-4093x3070&resize=400x300&vertical=center"
                  alt=""
                  className="mx-auto w-full max-w-5xl rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
};

export default Home;
