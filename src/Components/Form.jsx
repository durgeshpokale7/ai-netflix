import { useState } from "react";
import { validateData } from "../utlis/validate";

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const message = validateData(email, password);
    if (message) {
      setErrorMessage(message);
      return;
    }
    setErrorMessage("");
  };

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
    setErrorMessage("");
    setFormData({ fullName: "", email: "", password: "" });
  };

  return (
    <div className="flex justify-center px-4 sm:px-0 relative z-10 mt-2 sm:mt-10">
      <form
        onSubmit={handleSubmit}
        className="text-white flex flex-col items-start w-9/12 sm:w-7/12 md:w-6/12 lg:w-4/12 max-w-sm gap-4 sm:gap-6 bg-black/70 rounded-md px-7 sm:px-8 py-8 sm:py-12 shadow-lg backdrop-blur-sm"
      >
        <h1 className="text-3xl font-bold mb-4 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <div className="relative w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="peer w-full px-3 pt-6 pb-2 bg-black/40 border border-gray-500 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Full Name"
              required={!isSignIn}
            />
            <label
              htmlFor="fullName"
              className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-300"
            >
              Full Name
            </label>
          </div>
        )}

        <div className="relative w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer w-full px-3 pt-6 pb-2 bg-black/40 border border-gray-500 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Email"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-300"
          >
            Email
          </label>
          {errorMessage === "Email is not valid" && (
            <p className="text-red-600 mt-2 ">{errorMessage}</p>
          )}
        </div>

        <div className="relative w-full">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="peer w-full px-3 pt-6 pb-2 bg-black/40 border border-gray-500 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Password"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-gray-300"
          >
            Password
          </label>
          {errorMessage === "Password is not valid" && (
            <p className="text-red-600 mt-2">{errorMessage}</p>
          )}
        </div>

        <button
          type="submit"
          className="my-4 px-4 py-3 w-full bg-red-700 hover:bg-red-800 rounded-md font-semibold transition duration-300 text-sm sm:text-base"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 text-sm">
          {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleForm}
          >
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
