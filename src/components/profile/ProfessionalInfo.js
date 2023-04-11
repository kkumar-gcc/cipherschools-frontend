import { Link } from "react-router-dom";
import SecondaryButton from "../buttons/SecondaryButton";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { toast } from "react-toastify";
import axios from "axios";

const jobs = [
  { label: "Schooling", value: "Schooling" },
  { label: "College Student", value: "College Student" },
  { label: "Teaching", value: "Teaching" },
  { label: "Job", value: "Job" },
  { label: "Freelancing", value: "Freelancing" },
];
const degrees = [
  { label: "Primary", value: "Primary" },
  { label: "Secondary", value: "Secondary" },
  { label: "Higher Secondary", value: "Higher Secondary" },
  { label: "Graduation", value: "Graduation" },
  { label: "Post Graduation", value: "Post Graduation" },
];

function ProfessionalInfo(props) {
    const user = props.user;
  const [disabled, setDisabled] = useState(true);
  const [education, setEducation] = useState(degrees[0].value);
  const [currentJob, setCurrentJob] = useState(jobs[0].value);
  const handleButtonClick = () => {
    setDisabled(!disabled);
  };

  async function updateProfessionalInfo(e) {
    e.preventDefault();

    try {
      const data = {
        education: education,
        currentJob: currentJob,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/update-user`,
        data
      );
      setDisabled(true);
      props.getUser();
      console.log(res);
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  }

  useEffect(() => {
    setEducation(user.education ?? degrees[0].value);
    setCurrentJob(user.currentJob ?? jobs[0].value);
  }, [props.user]);
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">Professional Information</a>
            </h3>
          </div>
          <div className="py-3 text-base font-medium text-gray-600 dark:text-white inline-flex items-center">
            {disabled ? (
              <>
                <SecondaryButton type="button" onClick={handleButtonClick}>
                  Edit
                </SecondaryButton>
              </>
            ) : (
              <>
                <SecondaryButton type="button" onClick={updateProfessionalInfo}>
                  Save
                </SecondaryButton>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dropdown
            options={degrees}
            value={education}
            label="Highest education"
            onChange={(e) => setEducation(e.target.value)}
            disabled={disabled}
          />
          <Dropdown
            options={jobs}
            value={currentJob}
            label="What do you do currently?"
            onChange={(e) => setCurrentJob(e.target.value)}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
}

export default ProfessionalInfo;
