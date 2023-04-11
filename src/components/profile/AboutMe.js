import { useState } from "react";
import MilkdownEditor from "../MilkdownEditor";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

function AboutMe(props) {
  const [aboutMe, setAboutMe] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  function handleAboutMeChange(newAboutMe) {
    setAboutMe(newAboutMe);
  }
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">About me</a>
            </h3>
          </div>
          <div className="py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center">
            {showPreview ? (
              <>
                <SecondaryButton
                  type="button"
                  onClick={() => setShowPreview(!setAboutMe)}
                >
                  Edit
                </SecondaryButton>
              </>
            ) : (
              <>
                <SecondaryButton type="button">Save</SecondaryButton>
              </>
            )}
          </div>
        </div>
        {showPreview ? (
          <>
            <div class="py-3 px-4 rounded-lg relative prose max-w-none prose-a:no-underline lg:max-w-full xl:max-w-none  dark:prose-invert prose-a:text-skin-600 dark:prose-a:text-skin-500">
              {aboutMe}
            </div>
          </>
        ) : (
          <>
            <MilkdownEditor
              aboutMe={aboutMe}
              onMarkdownChange={handleAboutMeChange}
            />
          </>
        )}
        <div class="py-3 px-4 rounded-lg relative prose max-w-none prose-a:no-underline lg:max-w-full xl:max-w-none  dark:prose-invert prose-a:text-skin-600 dark:prose-a:text-skin-500">
          {aboutMe}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
