import { useState } from "react";
import { faqs } from "../data/FaqData";
import Heading from "./Heading";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-primary-900 py-12 text-white">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently <Heading title={"Asked Questions"} color={"tertiary"} />
          </h2>
          <p className="mt-4 text-gray-400">
            Find answers to some of the most common questions about our
            platform.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg bg-primary-800 p-4 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-semibold md:text-lg">{faq.question}</h3>
                <svg
                  className={`h-6 w-6 transform text-tertiary-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <div
                className={`mt-4 text-slate-300 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
