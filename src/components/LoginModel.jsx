import React from "react";
import Cross from "../assets/icons/cross.svg";
import LoginLogo from "../assets/loginLogo.svg";
import Apple from "../assets/icons/apple.svg";
import Facebook from "../assets/icons/facebook.svg";
import Google from "../assets/icons/google.svg";
import Yahoo from "../assets/icons/yahoo.svg";

function LoginModel({ show, setShow }) {
  // Don't render the component if show is false (this is important to declare)
  return (
    <>
      {show && (
        <div
          className={`flex absolute top-0 left-0 w-full h-screen justify-center items-center bg-[#3b3737a3] z-[1000]  ${
            show ? "modalContainer" : ""
          } `}
        >
          {/* content on login modal  */}
          <div className=" relative max-w-[430px] h-[600px] bg-white p-6 overflow-y-scroll">
            {/* inside on click setShow(false) can also be written or !show to toggle  */}
            <button
              className="absolute right-0 top-2"
              onClick={() => {
                setShow(!show);
              }}
            >
              {" "}
              <img className="w-[40px]" src={Cross} alt="" />
            </button>
            <div>
              <img src={LoginLogo} alt="" />
            </div>
            <h2 className="font-bold text-[38px] capitalize leading-10 py-3">
              Your adiClub benefits await
            </h2>
            <p className="text-gray-700 text-[14px] py-2">
              Get free shipping, discount vouchers and members only products
              when you’re in adiClub.
            </p>
            <p className="font-bold ">Log in or sign up (it’s free)</p>
            <div className="flex gap-4 py-5">
              <div className="login-logos">
                <img src={Apple} alt="" />
              </div>
              <div className="login-logos">
                <img src={Facebook} alt="" />
              </div>
              <div className="login-logos">
                <img src={Google} alt="" />
              </div>
              <div className="login-logos">
                <img src={Yahoo} alt="" />
              </div>
            </div>
            <form action="">
              <input
                className="border border-black py-3 px-3 w-full"
                type="email"
                placeholder="EMAIL ADDRESS *"
              />
            </form>
            <div className="py-3">
              <button>Keep me logged in. Applies to all options.</button> <br />
              <button className=" hover:bg-black hover:text-white underline">
                More info
              </button>
            </div>
            <div className="py-5">
              <span className="bg-black py-4 px-3 text-white my-5  ">
                <span className="pr-5 font-bold text-[17px] ">CONTINUE</span>
                <span>
                  <i class="bi bi-arrow-right text-[24px] font-semibold"></i>
                </span>
              </span>
            </div>
            <div>
              <p>
                Sign me up to adiClub, featuring exclusive adidas offers and
                news
              </p>
              <p>
                By clicking the “Continue” button, you are joining adiClub, will
                receive emails with the latest news and updates, and agree to
                the TERMS OF USE and ADICLUB TERMS AND CONDITIONS and
                acknowledge you have read the ADIDAS PRIVACY POLICY. If you are
                a California resident, the adiClub membership may be considered
                a financial incentive. Please see the Financial Incentives
                section of our CALIFORNIA PRIVACY NOTICE for details.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModel;
