import React from "react";
import { features } from "../data/FeaturesData";
import Heading from "./Heading";

const Features = () => {
  return (
    <section className="bg-primary-900 py-16">
      <div className="section-container text-center">
        <h2 className="mb-2 text-4xl font-bold text-white">
          Why <Heading title="Choose Us" color={"secondary"} />
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-400">
          Discover the features that make our AI website builder the perfect
          choice for creators, entrepreneurs, and businesses alike.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-secondary-600 to-tertiary-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative flex flex-col rounded-lg bg-primary-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:h-64 lg:h-72">
                {" "}
                <div className="mb-4 text-5xl text-secondary-500">
                  {feature.icon}
                </div>
                <div className="flex flex-grow flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
