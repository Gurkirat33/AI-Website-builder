import { useState } from "react";
import { pricingPlans } from "../data/PricingPlansData";
import Faq from "../components/Faq";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const handleToggle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };
  return (
    <>
      <div className="min-h-screen bg-primary-900 bg-[url('./assets/hero-bg.svg')] pt-20 text-white md:pt-24">
        <div className="section-container">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-20 hidden size-80 rounded-full bg-gradient-to-bl from-secondary-600 to-tertiary-600 opacity-20 blur-3xl sm:block"></div>
            <div className="absolute bottom-0 right-0 top-20 hidden size-80 rounded-full bg-gradient-to-bl from-secondary-600 to-tertiary-600 opacity-20 blur-3xl sm:block"></div>
            <h1 className="mx-auto mb-2 max-w-lg text-center text-4xl font-bold tracking-tight md:mb-4 md:text-5xl">
              Invest in the <span className="text-secondary-600">plan</span>{" "}
              that drives your{" "}
              <span className="text-secondary-600">growth</span>
            </h1>
            <p className="mx-auto mb-12 max-w-xl text-center text-slate-300">
              Find the perfect plan for your business needs—flexible,
              transparent, and designed to grow with you.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span
              className="cursor-pointer text-gray-400"
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <label className="relative mx-2 inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={billingCycle === "yearly"}
                className="peer sr-only"
                onChange={handleToggle}
              />
              <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-secondary-600 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:bg-secondary-600"></div>
            </label>
            <span
              className="cursor-pointer text-gray-400"
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly (20% discount)
            </span>
          </div>
          <div className="mt-12 grid gap-8 pb-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="group relative h-fit bg-primary-800 shadow-lg"
              >
                {plan.title === "Pro" && (
                  <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-secondary-600 to-tertiary-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                )}
                <div className="relative rounded-lg bg-primary-900 p-6">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="mt-4 text-3xl font-semibold">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </div>
                  <ul className="mt-6 space-y-4 text-gray-400">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-secondary-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full rounded-lg bg-secondary-500 py-3 text-sm font-semibold text-white transition-all hover:bg-secondary-600">
                    {plan.buttonLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Faq />
      </div>
    </>
  );
};

export default Pricing;
