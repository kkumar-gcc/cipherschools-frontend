import moment from "moment";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "../Input";
import { toast } from "react-toastify";
import axios from "axios";

function ProfileHeader(props) {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const user = props.user;
  async function updateProfile(e) {
    e.preventDefault();

    try {
      const data = {
        firstName: firstName,
        lastName: lastName,
        mobileNo: mobileNo,
        email: email
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/update-user`,
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
    setEmail(user.email ?? "");
    setFirstName(user.firstName ?? "");
    setLastName(user.lastName ?? "");
    setMobileNo(user.mobileNo ?? "");
  }, [user]);
  return (
    <>
      <header className="border border-gray-200 dark:border-gray-700 rounded-lg bg-skin-base dark:bg-gray-800">
        <div className="relative  pt-[60%] rounded-lg sm:pt-[30%] md:pt-[22%] ">
          <img
            className="absolute m-0 top-0 left-0 right-0 bottom-0 w-full h-full object-fit rounded-t-lg  bg-skin-base dark:bg-gray-800"
            src="https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png"
            alt={`Background of ${user.firstName}`}
          />
        </div>
        <div className="my-4 flex flex-col md:flex-row px-6">
          <div className="basis-1/3 mb-4 w-full md:w-1/3 flex items-start justify-center relative">
            <img
              className="-mt-24 z-10 w-40 h-40 rounded-full ring-8 ring-white dark:ring-gray-500"
              src="https://avatars.dicebear.com/api/bottts/:seed.svg"
              alt={`Avatar of  ${user.firstName}`}
            />
            <div className="absolute left-[57%] top-8 -mt-0 z-30">
              <button
                className="rounded-full bg-gray-700 text-white p-2.5"
                onClick={() => setShowModal(true)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.69 2.661c-1.894-1.379-3.242-1.349-3.754-1.266a.538.538 0 0 0-.35.223l-4.62 6.374-2.263 3.123a2.447 2.447 0 0 0-.462 1.307l-.296 5.624a.56.56 0 0 0 .76.553l5.256-2.01c.443-.17.828-.465 1.106-.849l1.844-2.545 5.036-6.949a.56.56 0 0 0 .1-.423c-.084-.526-.487-1.802-2.357-3.162zM8.977 15.465l-2.043.789a.19.19 0 0 1-.221-.062 5.145 5.145 0 0 0-1.075-1.03 5.217 5.217 0 0 0-1.31-.706.192.192 0 0 1-.126-.192l.122-2.186.549-.755s1.229-.169 2.833.998c1.602 1.166 1.821 2.388 1.821 2.388l-.55.756z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="basis-2/3 mb-4 flex flex-col md:flex-row items-center justify-center md:items-start">
            <div className="flex-1">
              <div className="font-medium text-center md:text-left ">
                <div className="text-2xl text-gray-700 dark:text-white">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-xl ">{user.email}</div>
                <div className="text-sm ">
                  Joined in
                  <span className="ml-1">
                    {moment(user.updatedAt).format("MMMM Y")}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 ">
              <Link to="/followers">
                <SecondaryButton type="button">
                  <span className="mr-1">{user.followers?.length}</span>
                  Followers
                </SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto md:min-w-[500px] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Input
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    label="First name"
                    id="name-input"
                    onChange={(e) => setFirstName(e.target.value)}
                    required={true}
                    className="mb-3"
                  />
                  <Input
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    label="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                    required={true}
                    className="mb-3"
                  />
                  <Input
                    value={email}
                    type="email"
                    name="femail"
                    placeholder="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    disabled={true}
                    className="mb-3"
                  />
                  <Input
                    value={mobileNo}
                    type="text"
                    name="mobileNo"
                    placeholder="Mobile Number"
                    label="Mobile Number"
                    onChange={(e) => setMobileNo(e.target.value)}
                    required={true}
                    className="mb-3"
                  />
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
                    onClick={updateProfile}
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

export default ProfileHeader;
