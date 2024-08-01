import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="w-96">
        <div className="flex items-center space-x-4 mb-10">
          <span className="w-2.5 h-10 bg-c-base-02 block rounded"></span>
          <h3 className="text-white font-poppins font-semibold text-4xl">
            Login
          </h3>
        </div>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="E-mail"
            className="bg-c-gray-0 border-2 border-c-gray-1 p-3 rounded-xl mb-5 font-roboto text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-c-gray-0 border-2 border-c-gray-1 p-3 rounded-xl mb-5 font-roboto text-white focus:outline-none"
          />
          <div className="flex space-x-3 mb-5">
            <input
              type="checkbox"
              className="w-6"
              name="remember"
              id="remember-checkbox"
            />
            <label htmlFor="remember" className="text-c-gray-2 font-roboto">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="bg-c-base-01 p-3 rounded-xl mt-1 font-poppins font-bold text-c-gray-0 hover:bg-c-base-01-hover"
          >
            Login
          </button>
        </form>
        <p className="mt-5 text-center text-base font-roboto text-c-gray-2">
          Don't have an account? <br />
          <a
            href="#"
            className="text-white font-roboto font-medium hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
