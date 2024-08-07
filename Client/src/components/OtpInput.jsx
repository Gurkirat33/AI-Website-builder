import PropTypes from "prop-types";
import { useState } from "react";

const OtpInput = ({ length, onChangeOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < length - 1 && value) {
      element.nextSibling.focus();
    }

    onChangeOtp(newOtp.join(""));
  };

  const handleBackspace = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);

    onChangeOtp(newOtp.join(""));
    if (index > 0 && otp[index] === "") {
      element.previousSibling.focus();
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-slate-300">
        Enter OTP{" "}
        <span className="text-sm text-slate-300">
          (Otp is sent to your email)
        </span>
      </label>
      <div className="flex gap-4">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            className="remove-arrow size-12 rounded-lg bg-primary-400 text-center text-xl text-slate-300 focus:outline-none"
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace(e.target, index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;
