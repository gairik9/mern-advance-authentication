import { motion } from "framer-motion";
import { CheckCheck, CircleX, Loader } from "lucide-react";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";

const Dashboard = () => {
  const { user, isLoading, signOut } = useAuthStore();

  const handleLogout = () => {
    signOut();
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.9 }}
      className="w-full max-w-2xl px-8 py-8 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl overflow-hidden"
    >
      <h1 className="text-center text-4xl text-slate-400 font-mono underline mb-12">
        Dashboard
      </h1>
      <h3 className="mb-4 font-mono text-3xl text-green-600">
        Profile Information
      </h3>
      <div className="w-full flex flex-col gap-6 items-start justify-start p-6 border border-slate-700 rounded-md bg-slate-800">
        <p className="text-gray-200 text-3xl font-mono">
          Name :{" "}
          <span className="tracking-wide  text-yellow-600 font-mono">
            {user.name}
          </span>
        </p>
        <p className="text-gray-200 text-3xl font-mono">
          Email :{" "}
          <span className="tracking-wide text-yellow-600 font-mono">
            {user.email}
          </span>
        </p>
        <p className="text-gray-200 text-3xl flex items-center gap-6 font-mono">
          isVarified :{" "}
          <span className="tracking-wide">
            {user.isVerified === true ? (
              <CheckCheck className="text-green-400" />
            ) : (
              <CircleX className="text-red-400" />
            )}
          </span>
        </p>
      </div>
      <h3 className="my-4 font-mono text-3xl text-green-600">
        Profile Activity
      </h3>
      <div className="w-full flex flex-col gap-6 items-start justify-start p-6 border border-slate-700 rounded-md bg-slate-800">
        <p className="text-gray-200 text-3xl font-mono">
          Created At :{" "}
          <span className="tracking-wide text-blue-600 font-mono">
            {formatDate(user.createdAt)}
          </span>
        </p>
        <p className="text-gray-200 text-3xl font-mono">
          Last Login :{" "}
          <span className="tracking-wide text-blue-600 font-mono">
            {formatDate(user.lastLogin)}
          </span>
        </p>
      </div>
      {/* Submit Button */}
      <motion.button
        type="submit"
        onClick={handleLogout}
        className="mt-5 w-full py-4 px-4 border border-transparent bg-gradient-to-r from-slate-800 to-slate-700 shadow-lg rounded-md hover:from-gray-900 hover:to-gray-900 hover:border hover:border-gray-400 text-white transition duration-300 ease-in text-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader className="w-6 h-6 animate-spin mx-auto" />
        ) : (
          "Logout"
        )}
      </motion.button>
    </motion.main>
  );
};

export default Dashboard;
