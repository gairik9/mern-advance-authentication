import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true; //? Allows Us To Send Cookies To The Server

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  // SignUp :
  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Verify Email :
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Check Auth :
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });

    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        error: null,
        isLoading: false,
        isCheckingAuth: false,
        isAuthenticated: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Login :
  signIn: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Logout :
  signOut: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/signout`);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Forgot Password :
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      set({
        message: response.data.message,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },

  // Reset Password :
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      set({
        message: response.data.message,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Something went wrong",
        isLoading: false,
      });
      throw error; //? Throw the error to be caught by the caller - handleSignup().
    }
  },
}));
