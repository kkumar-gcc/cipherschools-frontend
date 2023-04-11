import { Link } from "react-router-dom";
import SecondaryButton from "./components/buttons/SecondaryButton";

function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center vh-100">
        <div className="text-center">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="mt-2 text-3xl">
            {" "}
            <span className="text-rose-500">Opps!</span> Page not found.
          </p>
          <p className="lead text-xl mt-3">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-6">
            <Link to="/">
              <SecondaryButton type="button">Go Home</SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
