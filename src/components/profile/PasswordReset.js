import { Link } from "react-router-dom";
import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";

function PasswordReset() {
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">Password & Security</a>
            </h3>
          </div>
          <div>
            <Link
              to="/blogs"
              className="py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center"
            >
              <SecondaryButton type="button">Edit</SecondaryButton>
            </Link>
          </div>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            id="password"
            required
          />
        </div>
      </div>
    </>
  );
}

export default PasswordReset;
