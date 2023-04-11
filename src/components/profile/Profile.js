import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProfileHeader from "./ProfileHeader";
import AboutMe from "./AboutMe";
import Social from "./Social";
import PasswordReset from "./PasswordReset";
import Interest from "./Interest";
import ProfessionalInfo from "./ProfessionalInfo";
// import ContactForm from "./ContactForm";
// import ContactList from "./ContactList";

function Profile() {
  const [user, setUser] = useState([]);
  async function getUser() {
    try {
      const userRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/currentUser/`
      );
      console.log(userRes);
      setUser(userRes.data);
    } catch (err) {
      toast.error(err.response.data.errorMessage, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <ProfileHeader user={user} />
      <AboutMe />
      <Social user={user} getUser={getUser} />
      <ProfessionalInfo user={user} getUser={getUser} />
      <PasswordReset getUser={getUser}/>
      <Interest />
      {/* <ContactForm getContacts={getContacts} />
      <ContactList contacts={contacts} getContacts={getContacts} /> */}
    </div>
  );
}

export default Profile;
