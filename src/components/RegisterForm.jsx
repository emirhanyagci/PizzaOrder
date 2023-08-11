import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ onSubmitHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="space-y-4 md:space-y-6"
      action="#"
      onSubmit={(e) => {
        onSubmitHandler(e, email, password);
      }}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 "
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 ">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-amber-600 hover:underline "
        >
          Login here
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;
