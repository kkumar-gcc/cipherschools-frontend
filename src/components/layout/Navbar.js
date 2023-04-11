import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    // <MDBNavbar expand="lg" className="shadow-sm" light bgColor="white">
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand href="/">CipherSchools</MDBNavbarBrand>
    //     <MDBNavbarToggler
    //       type="button"
    //       data-target="#navbarRightAlignExample"
    //       aria-controls="navbarRightAlignExample"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setShowNavRight(!showNavRight)}
    //     >
    //       <MDBIcon icon="bars" fas />
    //     </MDBNavbarToggler>

    //     <MDBCollapse navbar show={showNavRight}>
    //       <MDBNavbarNav
    //         right
    //         fullWidth={false}
    //         className="mr-auto mb-2 mb-lg-0"
    //       ></MDBNavbarNav>
    // {loggedIn === false && (
    //   <>
    //     <Link to="/login">
    //       <MDBBtn outline color="dark" className="me-2">
    //         Login
    //       </MDBBtn>
    //     </Link>
    //     <Link to="/register">
    //       <MDBBtn color="dark" className="me-2 shadow-sm" type="button">
    //         Register
    //       </MDBBtn>
    //     </Link>
    //   </>
    // )}
    // {loggedIn === true && (
    //   <>
    //     {/* <Link to="/customer">Customers</Link> */}

    //     <LogOutBtn />
    //   </>
    // )}
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
    <nav class="bg-skin-base border-b border-gray-100 z-10 border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex w-full">
            <div class="shrink-0 flex items-center">
              <a href="/">CipherSchools</a>
            </div>
            <div class="hidden lg:flex sm:items-center sm:ml-6 flex-1 justify-end">
              {loggedIn === false && (
                <>
                  <div class="flex items-center ml-6 ">
                    <Link to="/login">
                      <PrimaryButton>Login</PrimaryButton>
                    </Link>
                  </div>
                  <div class="flex items-center ml-6 ">
                    <Link to="/register">
                      <SecondaryButton>Register</SecondaryButton>
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div class="flex items-center ml-6 ">
              {loggedIn === true && (
                <>
                  {/* <Link to="/customer">Customers</Link> */}

                  <LogOutBtn />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
