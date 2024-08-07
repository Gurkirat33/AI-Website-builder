import { Link } from "react-router-dom";

const UpgradeModal = () => {
  const featureArray = [
    "Unlimited Website Creation",
    "Premium Support",
    "Access to Advanced Features",
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-md rounded-lg bg-primary-800 p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white">
          Upgrade Your Experience
        </h2>
        <p className="mt-4 text-center text-slate-300">
          You've reached your website creation limit. Unlock unlimited potential
          by upgrading your plan!
        </p>
        <ul className="mt-6 space-y-3">
          {featureArray.map((feature) => (
            <li className="flex items-center text-slate-300" key={feature}>
              <svg
                className="mr-2 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/pricing"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none"
          >
            Upgrade Now
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-600 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
