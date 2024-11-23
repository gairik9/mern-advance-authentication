import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components";
import { Loader, Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    // await resetPassword(token, password, confirmPassword);
    // navigate("/signin");
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);
      toast.success("Password reset successful!");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error resetting password");
    }
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
          Reset Password
        </h1>
        {error && (
          <p className="text-red-500 text-center my-8 text-2xl">{error}</p>
        )}
        {message && (
          <p className="text-green-500 text-center my-8 text-2xl">{message}</p>
        )}

        <form onSubmit={handleReset} className="mt-12">
          {/* Password */}
          <Input
            icon={Lock}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Password */}
          <Input
            icon={Lock}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {/* Error Message */}
          {error && (
            <p className="text-red-600 font-semibold text-center my-2">
              {error}
            </p>
          )}
          {/* Error Message */}
          {error && (
            <p className="text-red-600 font-semibold text-center my-2">
              {error}
            </p>
          )}
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
              "Reset Password"
            )}
          </motion.button>
        </form>
      </div>
    </motion.main>
  );
};

export default ResetPassword;
