import { useState } from "react";
import Heading from "../components/Heading";
import { reviewImages } from "../data/ReviewImageData";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import OtpInput from "../components/OtpInput";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    otp: "",
  });
  const handleChaneOtp = (newOtp) => {
    setFormData({ ...formData, otp: newOtp });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() === "" || !formData.password.trim() === "") {
      toast.error("Please fill all the fields");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Invalid email address");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (/\s/.test(formData.password)) {
      toast.error("Password cannot contain empty spaces");
      return;
    }
    setShowOtp(true);
    toast.success("OTP sent to your email");
  };

  const handleVerifyOtp = async () => {
    //  Verify OTP login here
    // DEMO logic
    if (formData.otp === "1044") {
      try {
        const res = await axios.post("/api/v1/user/register-user", {
          email: formData.email.trim(),
          password: formData.password,
          rememberMe: formData.rememberMe,
        });
        toast.success("Registration successful");
        navigate("/dashboard");
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center bg-primary-900 bg-[url('./assets/hero-bg.svg')] text-white">
      <div className="absolute left-0 top-24 hidden size-80 rounded-full bg-gradient-to-bl from-secondary-600 to-tertiary-600 opacity-20 blur-3xl sm:block"></div>
      <div className="absolute right-0 top-24 size-80 rounded-full bg-gradient-to-tr from-secondary-600 to-tertiary-600 opacity-20 blur-3xl"></div>
      <div className="section-container max-w-[68rem] md:mt-6">
        <div className="md:flex">
          <div className="hidden p-8 text-white md:flex md:w-1/2 md:flex-col">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              AI Website Builder
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              The ultimate tool for creating stunning websites effortlessly.
            </p>
            <ul className="mb-6 space-y-3">
              <li>🔧 Customize layouts easily with AI</li>
              <li>⚡ Rapid deployment with one-click</li>
              <li>💡 Intelligent design suggestions</li>
              <li>📈 Analytics & insights built-in</li>
            </ul>
            <p className="mb-4 text-slate-300">
              Trusted by Thousands of Happy Users
            </p>
            <div className="relative flex -space-x-2">
              {reviewImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="d size-11 rounded-full object-cover transition duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-3xl rounded-lg bg-primary-800 p-6 md:mx-0 md:max-w-full md:p-12">
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Create Your <Heading title={"Account"} color={"secondary"} />
            </h2>
            <div className="mt-6 space-y-6">
              <div className="space-y-3">
                <label htmlFor="email" className="text-slate-300">
                  Enter your email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="XpKpX@example.com"
                  disabled={showOtp}
                  className={`${showOtp ? "cursor-not-allowed opacity-50" : ""} w-full rounded-lg bg-primary-400 px-4 py-2 text-slate-300 focus:outline-none`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative space-y-3">
                <label htmlFor="password" className="text-slate-300">
                  Create your password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="**********"
                  className={`${showOtp ? "cursor-not-allowed opacity-50" : ""} w-full rounded-lg bg-primary-400 px-4 py-2 text-slate-300 focus:outline-none`}
                  value={formData.password}
                  disabled={showOtp}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute bottom-3 right-6 cursor-pointer text-xl"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute bottom-3 right-6 cursor-pointer text-xl"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {showOtp && <OtpInput length={4} onChangeOtp={handleChaneOtp} />}
              {!showOtp && (
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    className="h-4 w-4 rounded bg-secondary-600"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-sm font-medium text-slate-300"
                  >
                    Remember me
                  </label>
                </div>
              )}

              {showOtp ? (
                <button
                  className="w-full rounded-lg bg-secondary-600 px-4 py-2 text-white hover:bg-secondary-700"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              ) : (
                <button
                  className="w-full rounded-lg bg-secondary-600 px-4 py-2 text-white hover:bg-secondary-700"
                  onClick={handleFormSubmit}
                >
                  Verify Email
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
