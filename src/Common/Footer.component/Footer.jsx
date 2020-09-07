import React from "react";
import CustomList from "../List.component/List";
const Footer = () => {
  return (
    <div>
      <div className="contentWrapper">
        <div className="quickLinks">
          <h3>quick links</h3>
          <div>
            <CustomList text={"weekdays:"} />
            <CustomList text={"events:"} />
            <CustomList text={"testimonials:"} />
            <CustomList text={"contacts:"} />
          </div>
        </div>
        <div className="openingHours">
          <h3>opening hours</h3>
          <div>
            <h4>weekdays</h4>
            <span>monday - friday</span>
            <br />
            <span>9am-9pm</span>
          </div>
        </div>
        <div className="contactInfo">
          <h3>contant info</h3>
          <div>
            <address>
              address: <br /> 12b, kashn Area, here, Nigeria
            </address>
            <div>
              <span>telephone</span>
              <span>+234 1234 987</span>
            </div>
            <div>
              <h4>email</h4>
              <p>info@thinkspicefoods.com</p>
            </div>
          </div>
          <div className="subscribe">
            <h3>subscribe</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
