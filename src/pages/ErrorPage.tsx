import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-9xl font-semibold text-orange-400">404</h1>
      <p className="mb-4 text-xl text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-20 w-20 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600 text-xl">
        Let's get you back to
        <Link
          to="/"
          className="text-white ml-2 bg-orange-400 px-4 py-2 rounded-3xl"
        >
          <span>Home Page</span>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
