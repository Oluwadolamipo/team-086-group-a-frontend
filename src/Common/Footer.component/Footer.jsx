import React from "react";
import CustomList from "../List.component/List";
import FooterStyles from "./Footer.module.css";
import { FooterQuickLinksCollections } from "../../Utils/QuickLinks_collection";
import logoImage from "../../Asset/logo.png";
import CustomImage from "../Image.component/Image";
const Footer = () => {
  const {
    container,
    wrapper,
    contentWrapper,
    logo,
    list,
    listElements,
    quickLinks,
    openingHours,
    openingHourDetail,
    contactInfo,
    subscribe,
  } = FooterStyles;

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={contentWrapper}>
          <div className={logo}>
            <CustomImage
              src={logoImage}
              alt={"logo image"}
              height={"50px"}
              width={"100px"}
            />
          </div>
          <div className={quickLinks}>
            <h3>quick links</h3>
            <div>
              <ul className={list}>
                {FooterQuickLinksCollections &&
                  FooterQuickLinksCollections.map((quicklinks, index) => (
                    <CustomList
                      text={quicklinks}
                      key={index}
                      color={"#fff"}
                      className={listElements}
                    />
                  ))}
              </ul>
            </div>
          </div>
          <div className={openingHours}>
            <h3>opening hours</h3>
            <div className={openingHourDetail}>
              <p role="heading">weekdays</p>
              <span>monday - friday</span>
              <br />
              <span>9am-9pm</span>
            </div>
          </div>
          <div className={contactInfo}>
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
          </div>
          <div className={subscribe}>
            <h3>subscribe</h3>
          </div>
        </div>
        <div>
          <div>
            <span>&copy;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
