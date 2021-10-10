import React from "react";
import ic_phone from "../assets/icons/icon-phone.svg";
import ic_email from "../assets/icons/icon-email.svg";
import ic_twitter from "../assets/icons/icon-twitter.svg";
export const Social = () => {
  return (
    <>
      <div className="social">
        <a class="btn-icon" href="tel:0982953515">
          <img src={ic_phone} alt="tel" />
        </a>
        <a class="btn-icon" href="mailto:jycabrerap@unl.edu.ec">
          <img src={ic_email} alt="tel" />
        </a>
        <a class="btn-icon" href="#twitter">
          <img src={ic_twitter} alt="tel" />
        </a>
      </div>
    </>
  );
};
