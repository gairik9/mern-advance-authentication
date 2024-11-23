import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  // const isLoading = false;

  const { verifyEmail, isLoading, error } = useAuthStore();

  // *Handle Input Change
  const handleChange = (index, value) => {
    const newCode = [...code];
    // *Handle Pasted Content :
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // *Focus on The Last Non-empty Input Or The First Empty One :
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      // *Move Focus To The Next Input Field If Value Is Entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // *Handle Keydown Event:
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // *Handle Form Submission :
  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    // alert(`Submitted Code: ${verificationCode}`);
    // 123456
    try {
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email Verified Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  // *Auto-submit When All Digits Are Entered :
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      // *Call The Submit Function:
      handleSubmit(new Event("submit"));
    }
  }, [code, navigate]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-2xl bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl overflow-hidden"
    >
      {/* Wrapper */}
      <div className="px-10 pt-20 pb-10">
        {/* Title */}
        <h1 className="text-5xl mb-4 text-center text-gray-300 tracking-wide font-medium">
          Verify Your Email
        </h1>
        {/* Sub-Heading */}
        <p className="mt-8 text-center text-xl text-gray-400">
          Enter the 6 digit OTP sent to your email.
        </p>
        {/* OTP Form */}
        <form className="mt-12" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-20 h-20 text-center text-white text-2xl bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          {/* Error Message */}
          {error && (
            <p className="text-red-600 font-semibold text-center mt-2">
              {error}
            </p>
          )}
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
            className="mt-8 w-full py-4 px-4 border border-transparent bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg rounded-md hover:from-gray-900 hover:to-gray-900 hover:border hover:border-gray-400 text-white transition duration-300 ease-in text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </form>
      </div>
    </motion.main>
  );
};

export default VerifyEmail;
