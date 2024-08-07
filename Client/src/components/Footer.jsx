import { footerData } from "../data/FooterData";

const Footer = () => {
  return (
    <footer className="bg-primary-800 bg-[url('./assets/hero-bg.svg')] py-12 text-white">
      <div className="section-container">
        <div className="mx-auto text-center lg:max-w-[50%]">
          <h3 className="text-3xl font-bold">Join Our Newsletter</h3>
          <p className="mt-6 text-sm text-slate-300">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers.
          </p>
          <div className="mt-10 flex rounded-full bg-gray-700 px-2 py-1.5 text-left">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent pl-4 text-sm text-gray-300 outline-none"
            />
            <button
              type="button"
              className="ml-4 rounded-full bg-secondary-500 px-5 py-2.5 text-sm text-white transition-all hover:bg-secondary-400"
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr className="my-12 border-gray-600" />

        <div className="grid gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="mb-6 text-lg font-bold text-white">
                {section.title}
              </h4>
              {section.content && (
                <p className="mb-2 text-sm text-gray-400">{section.content}</p>
              )}
              {section.links && (
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.link}
                        className="text-[15px] text-gray-400 transition-all hover:text-secondary-400"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
