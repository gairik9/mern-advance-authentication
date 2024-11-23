import { motion } from "framer-motion";
import { User, Mail, Lock, Loader } from "lucide-react";
import { Input, PasswordStrengthMeter } from "../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, error, isLoading } = useAuthStore();

  const navigate = useNavigate();

  // const isLoading = false;

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log("Error in handleSignUp ", error);
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
          Create Account
        </h1>
        {/* Register Form */}
        <form onSubmit={handleSignUp} className="mt-12">
          {/* Full Name */}
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Email */}
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password */}
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Error Message */}
          {error && <p className="text-red-600 font-semibold text-center mt-2">{error}</p>}
          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={password} />
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
              "SignUp"
            )}
          </motion.button>
        </form>
      </div>
      {/* Footer */}
      <div className="bg-slate-800/80 text-center py-6">
        <p className="text-gray-500 text-2xl">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-white cursor-pointer">
            SignIn
          </Link>
        </p>
      </div>
    </motion.main>
  );
};

export default Register;
