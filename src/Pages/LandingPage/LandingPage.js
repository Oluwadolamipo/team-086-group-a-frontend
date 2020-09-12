import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
// import LandingPageStyles from "../../Styles/LandingPage.module.css";
import Header from "../../Common/Header.Component/Header";
import Footer from "../../Common/Footer.component/Footer";
const LandingPage = () => {
  const [datas] = useContext(NonRegisterContextMembers);
  const { data } = datas;
  return (
    <div>
      <Header />
      <div>{data[0]}</div>
      <Footer />
    </div>
  );
};

export default LandingPage;
