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
            <CustomList text={"weekdays:"} />
            <CustomList text={"monday - friday"} />
            <CustomList text={"9am-8pm"} />
          </div>
        </div>
        <div className="contactInfo">
          <h3>contant info</h3>
          <div>
            <address>address: <br/> 12b, kashn Area, here, Nigeria</address>
        </div>
        <div className="subscribe">
          <h3>subscribe</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
