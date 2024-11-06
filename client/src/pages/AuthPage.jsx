import { useState } from "react";

import { toast } from "react-toastify";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitRegister = () => {
    if (password !== confirmPassword) {
      toast("Passwords do not match!");
    }
  };

  const submitLogin = async () => {
    const res = await fetch("");
    const data = await res.json();

    toast(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="w-[400px]">
        <div className="grid w-full grid-cols-2">
          <button
            onClick={() => setActiveTab("signup")}
            className={`p-2 ${
              activeTab === "signup" ? "bg-base-100 text-accent" : "bg-base-200"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setActiveTab("signin")}
            className={`p-2 ${
              activeTab === "signin" ? "bg-base-100 text-accent" : "bg-base-200"
            }`}
          >
            Sign In
          </button>
        </div>

        {activeTab === "signup" && (
          <div className="bg-base-100 shadow-md p-6 mt-4">
            <div className="flex justify-center">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl text-center mt-2">Create an account</h2>
            <p className="text-center mb-4">
              Enter your information to create an account
            </p>

            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-2 border rounded"
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="w-full p-2 border rounded"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 border rounded"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full p-2 border rounded"
                  value={confirmPassword}
                  onInput={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full mt-4 p-2 bg-success text-white rounded"
              onClick={submitRegister}
            >
              Create account
            </button>
          </div>
        )}

        {activeTab === "signin" && (
          <div className="bg-base-100 shadow-md p-6 mt-4">
            <div className="flex justify-center">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-2xl text-center mt-2">Sign In</h2>
            <p className="text-center mb-4">
              Enter your credentials to access your account
            </p>

            <div className="grid gap-4">
              <div>
                <label htmlFor="signin-email" className="block mb-1">
                  Email
                </label>
                <input
                  id="signin-email"
                  type="email"
                  placeholder="m@example.com"
                  className="w-full p-2 border rounded"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="signin-password" className="block mb-1">
                  Password
                </label>
                <input
                  id="signin-password"
                  type="password"
                  className="w-full p-2 border rounded"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              className="w-full mt-4 p-2 bg-success text-white rounded"
              onClick={submitLogin}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
