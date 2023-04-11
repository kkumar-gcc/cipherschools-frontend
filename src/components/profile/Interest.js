import { Link } from "react-router-dom";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const interestsList = [
  "App Development",
  "Web Development",
  "Game Development",
  "Data Structures",
  "Programming",
  "Machine Learning",
  "Data Science",
  "Others",
];

function Interest(props) {
  const [showModal, setShowModal] = useState(false);
  const [interests, setInterests] = useState([]);

  const handleTagClick = (tag) => {
    if (interests.includes(tag)) {
      setInterests(interests.filter((t) => t !== tag));
    } else {
      setInterests([...interests, tag]);
    }
  };
  async function updateInterests(e) {
    e.preventDefault();

    try {
      const data = {
        interests: interests,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/update-interest`,
        data
      );
      props.getUser();
      setShowModal(false);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (err) {
      toast.error(err.response.data.errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  }

  useEffect(() => {
    setInterests(props.user.interests ?? []);
  }, [props.user]);
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">Interests</a>
            </h3>
          </div>
          <div className="py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center">
            <SecondaryButton type="button" onClick={() => setShowModal(true)}>
              Edit
            </SecondaryButton>
          </div>
        </div>
        <div className="flex flex-wrap">
          {interests.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-white bg-skin-500 mr-2 mb-2`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:min-w-[500px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-wrap">
                    {interestsList.map((tag) => (
                      <button
                        key={tag}
                        className={`px-3 py-1 rounded-full text-white ${
                          interests.includes(tag)
                            ? "bg-skin-500"
                            : "bg-gray-300 hover:bg-gray-400"
                        } mr-2 mb-2`}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <PrimaryButton
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </PrimaryButton>
                  <SecondaryButton
                    type="button"
                    onClick={updateInterests}
                    className="ml-4"
                  >
                    Save
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Interest;
