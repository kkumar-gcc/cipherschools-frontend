import MilkdownEditor from "../MilkdownEditor";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

function AboutMe(props) {
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">About me</a>
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
          <MilkdownEditor />
      </div>
    </>
  );
}

export default AboutMe;
