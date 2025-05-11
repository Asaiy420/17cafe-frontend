import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { AxiosError } from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page from refreshing
    setError("");
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/auth/sign-up", {
        username,
        email,
        password,
        confirmPassword,
      });
      console.log("signed up successfully: ", response.data);
      navigate("/login"); // Redirect to login page after successful signup
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data.message || "Failed to signup. Please try again."
        );
        console.error("Error signing up: ", err.response?.data);
      } else {
        setError("An unexpected error occurred");
        console.error("Unexpected error: ", err);
      }
    } finally {
      setIsLoading(false);
    }
  };
  // username email password confirmPassword

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <input
            type="username"
            placeholder="johndoe"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="********"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
