import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

function Social(props) {
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">On the web</a>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="url"
            name="linkedinUrl"
            placeholder="LinkedIn"
            label="Linkedin"
            id="linkedin"
            required
          />
          <Input
            type="url"
            name="github"
            placeholder="GitHub"
            label="Github"
            id="github"
            required
          />
          <Input
            type="url"
            name="facebookUrl"
            placeholder="Facebook"
            label="Facebook"
            id="facebook"
            required
          />
          <Input
            type="url"
            name="twitterUrl"
            placeholder="Twitter"
            label="Twitter"
            id="twitter"
            required
          />
          <Input
            type="url"
            name="instagramUrl"
            placeholder="Instagram"
            label="Instagram"
            id="instagram"
            required
          />
          <Input
            type="url"
            name="websiteUrl"
            placeholder="Your Website"
            label="Website"
            id="website"
            required
          />
        </div>
      </div>
    </>
  );
}

export default Social;
