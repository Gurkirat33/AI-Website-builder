import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-primary-900 bg-[url('./assets/hero-bg.svg')] pt-16 md:pt-24">
      <div className="section-container text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center p-4">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Welcome to AI Website Builder
          </h2>
          <p className="my-2 text-slate-300">
            Start building your AI-powered website today. Let's bring your ideas
            to life
          </p>
          <Link
            to={"setup"}
            className="rounded-full bg-secondary-500 px-6 py-2.5 text-white"
          >
            Create New Website
          </Link>
        </div>
        <div className="p-6 text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section className="rounded-lg bg-primary-800 p-6 shadow">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Create Your First Website
              </h2>
              <p className="mb-4 text-gray-400">
                Start with a template or build from scratch. Our AI will help
                you design a stunning website effortlessly.
              </p>
              <button className="w-full rounded-lg bg-blue-600 py-2 font-bold text-white transition hover:bg-blue-500">
                Get Started
              </button>
            </section>
            <section className="rounded-lg bg-primary-800 p-6 shadow">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Customize Your Design
              </h2>
              <p className="mb-4 text-gray-400">
                Use our drag-and-drop editor to customize every aspect of your
                website. AI suggestions will ensure your site looks professional
                and is user-friendly.
              </p>
              <button className="w-full rounded-lg bg-blue-600 py-2 font-bold text-white transition hover:bg-blue-500">
                Customize Now
              </button>
            </section>
            <section className="col-span-1 rounded-lg bg-primary-800 p-6 shadow md:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Get Support When You Need It
              </h2>
              <p className="mb-4 text-gray-400">
                Access our help center for tutorials, FAQs, and tips, or contact
                our 24/7 support team if you need further assistance.
              </p>
              <button className="w-full rounded-lg bg-green-600 py-2 font-bold text-white transition hover:bg-green-500">
                Visit Help Center
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
