import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function PasswordReset(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  async function updatePassword(e) {
    e.preventDefault();

    try {
      const data = {
        currentPassword: currentPassword,
        password: password,
        passwordVerify: passwordVerify,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/resetpassword`,
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
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">Password & Security</a>
            </h3>
          </div>
          <div className="py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center">
            <SecondaryButton type="button" onClick={() => setShowModal(true)}>
              Change
            </SecondaryButton>
          </div>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            id="password"
            disabled={true}
          />
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
                  <Input
                    value={currentPassword}
                    type="password"
                    name="currentPassword"
                    placeholder="Current password"
                    label="Current password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required={true}
                    className="mb-3"
                  />
                  <Input
                    value={password}
                    type="password"
                    name="password"
                    placeholder="password"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                    className="mb-3"
                  />
                  <Input
                    value={passwordVerify}
                    type="password"
                    name="passwordVerify"
                    placeholder="password"
                    label="Verify password"
                    onChange={(e) => setPasswordVerify(e.target.value)}
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
                    onClick={updatePassword}
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

export default PasswordReset;
