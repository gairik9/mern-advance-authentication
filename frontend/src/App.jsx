import {
  Dashboard,
  ForgotPassword,
  Home,
  Login,
  Register,
  ResetPassword,
  VerifyEmail,
} from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";

// ?Protected Routes That Require Authentication :
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// ?Redirect To Home Page If User Is Already Logged In :
const RedirectIfLoggedInRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <div>Loading...</div>; // Or a spinner
  }

  console.log("isAuthenticated : ", isAuthenticated);
  console.log(user);
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 max-md:px-8 flex items-center justify-center relative overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <RedirectIfLoggedInRoute>
                <Register />
              </RedirectIfLoggedInRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RedirectIfLoggedInRoute>
                <Login />
              </RedirectIfLoggedInRoute>
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RedirectIfLoggedInRoute>
                <ForgotPassword />
              </RedirectIfLoggedInRoute>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectIfLoggedInRoute>
                <ResetPassword />
              </RedirectIfLoggedInRoute>
            }
          />
        </Routes>
        <Toaster position="top-center" reverseOrder={true} />
      </BrowserRouter>
    </main>
  );
};

export default App;
