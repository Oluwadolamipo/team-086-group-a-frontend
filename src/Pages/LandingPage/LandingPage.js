import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import VendorBar from "../../Components/LandingPage/Vendor_SignUp_Bar.jsx";
import AboutSession from "../../Components/LandingPage/AboutSection";
import IllustrationSection from "../../Components/LandingPage/Illustration_Section.jsx";
import SpecialOffer from "../../Components/LandingPage/SpecialOffer.jsx";
import LandingPageStyles from "../../Styles/LandingPageStyles/parentStyle.module.css";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
import CustomInput from "../../Common/Input.component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const {
    topArea,
    emphasis,
    textWrapper,
    text,
    search,
    searchIcon,
    input,
  } = LandingPageStyles;
  const [datas, setDatas] = useContext(NonRegisterContextMembers);
  const { collction, searchData } = datas;

  const handleChange = ({ target }) => {
    console.log("target.value", target.value);
  };

  return (
    <div>
      <div className={topArea}>
        <Header />
        <VendorBar />
        <div className={emphasis}>
          <div className={textWrapper}>
            <div className={text}>
              <p>sit, work and eat</p>
            </div>
          </div>
          <div className={search}>
            <CustomInput
              type={"text"}
              placeholder="Search"
              onChange={handleChange}
              value={searchData}
              className={input}
            />
            <FontAwesomeIcon icon={faSearch} className={searchIcon} />
          </div>
        </div>
      </div>
      <div>
        <AboutSession />
        <IllustrationSection />
        <SpecialOffer />
      </div>
      <div>{searchData ? searchData : "waiting"}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
