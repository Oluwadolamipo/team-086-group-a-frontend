import React from "react";
import CustomList from "../List.component/List";
import FooterStyles from "./Footer.module.css";
import { FooterQuickLinksCollections } from "../../Utils/QuickLinks_collection";
import logoImage from "../../Asset/logo.png";
import CustomImage from "../Image.component/Image";
import CustomInput from "../Input.component/Input";
import CustomButton from "..//Button.component/Button";

const Footer = () => {
  const {
    container,
    wrapper,
    contentWrapper,
    logo,
    shortLinksWrapper,
    quickLinks,
    list,
    listElements,
    openingHours,
    openingHourDetail,
    contactInfo,
    contactInfoDetail,
    subscribe,
    subscribeEvents,
    formWrapper,
    form,
    input,
    button,
    text,
  } = FooterStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={contentWrapper}>
          <div className={logo}>
            <CustomImage src={logoImage} alt={"logo image"} width={"100px"} />
          </div>
          <div className={shortLinksWrapper}>
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
              <div className={contactInfoDetail}>
                <div>
                  <span>address:</span>
                  <address>12b, kashn Area, here, Nigeria</address>
                </div>
                <div style={{ lineHeight: 1.5 }}>
                  <span>telephone</span>
                  <p>+234 1234 987</p>
                </div>
                <div style={{ lineHeight: 1.5 }}>
                  <span>email</span>
                  <p>info@thinkspicefoods.com</p>
                </div>
              </div>
            </div>
            <div className={subscribe}>
              <h3>subscribe</h3>
              <div className={subscribeEvents}>
                <div className={formWrapper}>
                  <form className={form}>
                    <CustomInput
                      type={"email"}
                      name={"email"}
                      placeholder={"Your Email"}
                      className={input}
                      onChange={({ target }) => target.name}
                    />
                    <CustomButton text={"sign up"} className={button} />
                  </form>
                </div>
                <div className={text}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque libero iure hic, ullam asperiores culpa dolor vitae
                  </p>
                </div>
              </div>
            </div>
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
