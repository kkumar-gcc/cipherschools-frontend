import { useEffect, useState } from "react";
import Input from "../Input";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Social(props) {
  const user = props.user;
  const [disabled, setDisabled] = useState(true);
  const [linkedinUrl, setLinkedinUrl] = useState(' ');
  const [githubUrl, setGithubUrl] = useState(' ');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const handleButtonClick = () => {
    setDisabled(!disabled);
  };
  async function updateSocial(e) {
    e.preventDefault();
    try {
      const data = {
        linkedinUrl: linkedinUrl,
        githubUrl: githubUrl,
        facebookUrl: facebookUrl,
        twitterUrl: twitterUrl,
        instagramUrl: instagramUrl,
        portfolioUrl: portfolioUrl,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      var res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/update-user`,
        data
      );
      setDisabled(true);
      props.getUser();
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
    setFacebookUrl(user.facebookUrl ?? '');
    setGithubUrl(user.githubUrl ?? '')
    setInstagramUrl(user.instagramUrl ?? '');
    setLinkedinUrl(user.linkedinUrl ?? '');
    setPortfolioUrl(user.portfolioUrl ?? '');
    setTwitterUrl(user.twitterUrl ?? '');
  },[props.user])
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
          <div className="flex flex-row ">
            <div className="flex-1">
              <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
                <a href="/blogs">On the web</a>
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
                  <SecondaryButton type="button" onClick={updateSocial}>Save</SecondaryButton>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="url"
              value={linkedinUrl}
              name="linkedinUrl"
              placeholder="LinkedIn"
              label="Linkedin"
              id="linkedin"
              onChange={(e) => setLinkedinUrl(e.target.value)}
              disabled={disabled}
            />
            <Input
              type="url"
              name="github"
              value={githubUrl}
              placeholder="GitHub"
              label="Github"
              id="github"
              onChange={(e) => setGithubUrl(e.target.value)}
              disabled={disabled}
            />
            <Input
              type="url"
              name="facebookUrl"
              value={facebookUrl}
              placeholder="Facebook"
              label="Facebook"
              id="facebook"
              onChange={(e) => setFacebookUrl(e.target.value)}
              disabled={disabled}
            />
            <Input
              type="url"
              name="twitterUrl"
              value={twitterUrl}
              placeholder="Twitter"
              label="Twitter"
              id="twitter"
              onChange={(e) => setTwitterUrl(e.target.value)}
              disabled={disabled}
            />
            <Input
              type="url"
              name="instagramUrl"
              value={instagramUrl}
              placeholder="Instagram"
              label="Instagram"
              id="instagram"
              onChange={(e) => setInstagramUrl(e.target.value)}
              disabled={disabled}
            />
            <Input
              type="url"
              name="websiteUrl"
              value={portfolioUrl}
              placeholder="Your Website"
              label="Website"
              id="website"
              onChange={(e) => setPortfolioUrl(e.target.value)}
              disabled={disabled}
            />
          </div>
      </div>
    </>
  );
}

export default Social;
