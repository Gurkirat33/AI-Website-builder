import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 py-12 text-white">
      <div className="absolute inset-0 bg-[url('/path-to-your-abstract-image.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="section-container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight">
            Ready to Elevate Your Business?
          </h2>
          <p className="mb-12 text-lg text-gray-300">
            Join thousands of businesses that have transformed their online
            presence with our AI-powered solutions. Don't miss out on the future
            of web design.
          </p>

          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Link
              to="/sign-up"
              className="rounded-lg bg-secondary-600 px-4 py-2 text-white shadow-lg transition duration-300 ease-in-out hover:bg-secondary-700 sm:px-6 sm:py-3"
            >
              Get Started Now
            </Link>
            <Link
              to="/learn-more"
              className="rounded-lg border-2 border-tertiary-600 bg-transparent px-4 py-2 text-tertiary-600 transition duration-300 hover:bg-tertiary-600 hover:text-white sm:px-6 sm:py-3"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-bl from-secondary-600 to-tertiary-600 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-tr from-secondary-600 to-tertiary-600 opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Cta;
