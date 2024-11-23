import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { Loader, Mail, MoveLeft } from "lucide-react";
import { Input } from "../../components";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };
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
          Forgot Password ?
        </h1>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-12">
            <p className="my-8 text-center text-2xl text-gray-400">
              Enter your email & we&apos;ll send you a link to reset your
              password.
            </p>
            {/* Email */}
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-5 w-full py-4 px-4 border border-transparent bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg rounded-md hover:from-gray-900 hover:to-gray-900 hover:border hover:border-gray-400 text-white transition duration-300 ease-in text-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Send Reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="mt-12">
            <p className="text-center text-2xl text-gray-400">
              Check your email for a link to reset your password. If it
              doesn&apos;t appear within a few minutes, check your spam folder.
            </p>
            {/* Footer */}
            <div className="bg-slate-800/80 text-center py-6 text-gray-500 text-2xl mt-8">
              <Link
                to={"/signin"}
                className="text-white cursor-pointer flex items-center justify-center gap-4"
              >
                <MoveLeft /> Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.main>
  );
};

export default ForgotPassword;
