import { useEffect, useState } from "react";
import MilkdownEditor from "../MilkdownEditor";
import SecondaryButton from "../buttons/SecondaryButton";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { toast } from "react-toastify";
import PrimaryButton from "../buttons/PrimaryButton";

function AboutMe(props) {
  const [aboutMe, setAboutMe] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  function handleAboutMeChange(newAboutMe) {
    setAboutMe(newAboutMe);
  }
  async function updateAboutMe(e) {
    e.preventDefault();

    try {
      const data = {
        aboutMe: aboutMe,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/update-user`,
        data
      );
      props.getUser();
      setShowPreview(true);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (err) {
      toast.error(err.response.data.errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  }

  useEffect(()=>{
    setAboutMe(props.user.aboutMe ?? "");
  },[props.user])
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
                <PrimaryButton type="button" onClick={() => setShowPreview(true)}>
                  Cancel
                </PrimaryButton>
                <SecondaryButton type="button" onClick={updateAboutMe} className="ml-3">
                  Save
                </SecondaryButton>
              </>
            )}
          </div>
        </div>
        {showPreview ? (
          <>
            <div className="py-3 px-4 rounded-lg relative prose max-w-none prose-a:no-underline lg:max-w-full xl:max-w-none  dark:prose-invert prose-a:text-skin-600 dark:prose-a:text-skin-500">
              <ReactMarkdown>{aboutMe}</ReactMarkdown>
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
      </div>
    </>
  );
}

export default AboutMe;
