import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const useAuth = () => {
  const { user, setUser, isLoading, setLoading, error, setError } =
    useAuthStore();
  const navigate = useNavigate();

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => setLoading(false));
  };
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => setLoading(false));
  };
  const logout = () => {};
  return { signIn, signUp, logout, user, isLoading, error };
};

export default useAuth;
