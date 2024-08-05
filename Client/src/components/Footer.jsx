import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div class="mx-auto max-w-7xl px-10 py-12 font-sans tracking-wide">
        <div class="mx-auto text-center lg:max-w-[50%]">
          <h3 class="text-3xl font-bold">Newsletter</h3>
          <p class="mt-6 text-sm text-slate-300">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>

          <div class="mt-10 flex rounded-full bg-[#dddddd] px-2 py-1.5 text-left">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full bg-transparent pl-4 text-sm outline-none"
            />
            <button
              type="button"
              class="ml-4 rounded-full bg-gray-600 px-5 py-2.5 text-sm text-white transition-all hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </div>

        <hr class="my-12 border-gray-300" />

        <div class="grid gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4">
          <div>
            <h4 class="mb-6 text-lg font-bold text-gray-800">About Us</h4>
            <p class="mb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida, mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>

          <div>
            <h4 class="mb-6 text-lg font-bold text-gray-800">Services</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-6 text-lg font-bold text-gray-800">Resources</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Ebooks
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-6 text-lg font-bold text-gray-800">About Us</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Mission and Values
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="text-[15px] text-gray-500 hover:text-gray-800"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
