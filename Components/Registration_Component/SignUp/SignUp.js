import React, { useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import SignUpStyles from "../../../Styles/SignUp.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomInput from "../../../Common/Input.component/Input";
import CustomLink from "../../../Common/Link.component/Link";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
// import axios from "axios";
import { NonRegisterContextMembers } from "../../../Context/NonRegisteredMemberContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
//
const Signup = ({ history }) => {
  //function for SignUp users
  const [datas, setData] = useContext(NonRegisterContextMembers);
  const {
    container,
    imageView,
    image,
    asideWrapper,
    signupText,
    signupLinks,
    googleSignup,
    googleIcon,
    facebookSignup,
    facebookIcon,
    lineWrapper,
    leftLine,
    textWrapper,
    rightLine,
    formWrapper,
    form,
    input,
    button,
  } = SignUpStyles;
  const FormRef = useRef();
  const inputsRef = useRef();
  const { formValue } = datas;

  const handleSignNavigation = () => {
    history.push("/team-086-group-a-frontend/signin");
  };

  const isNumeric = (n) => {
    //function that checks for numbers
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const handleChange = ({ target }) => {
    //function to handle input value onchange
    setData((formData) => ({
      ...formData,
      formValue: { ...formValue, [target.name]: target.value },
    }));
  };

  const handleUSerSigUp = async (e) => {
    e.preventDefault();
    const {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = formValue;

    //conditionion the input value datas

    if (isNumeric(fullName)) {
      alert("Number is not an option");
      inputsRef.current.children[0].firstChild.focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must not be less 8 characters");
      inputsRef.current.children[3].firstChild.focus();
      return false;
    } else if (confirmPassword.length < 8) {
      alert("confirm password must not be less 8 characters");
      inputsRef.current.children[4].firstChild.focus();
      return false;
    } else if (confirmPassword !== password) {
      alert("Password does not match");
      inputsRef.current.children[4].firstChild.focus();
      return false;
    }

    //adding the userInformations to an object
    let userObject = {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    };
    console.log(userObject);

    FormRef.current.reset(); //reset form on submit
    alert("sign up successfully");

    //routing to signin page on componentdid update
    history.push("/team-086-group-a-frontend/signin");

    //post to the server
    try {
      // await axios.post("http://endPoint/", userObject)
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className={container}>
      <div className={imageView}>
        <CustomImage src={RegImage} alt={"food image"} className={image} />
      </div>
      <div className={asideWrapper}>
        <div className={signupText}>
          <h2>sign up</h2>
        </div>
        <div className={signupLinks}>
          <CustomLink
            text={
              <div className={googleSignup}>
                <FontAwesomeIcon icon={faGoogle} className={googleIcon} />
                <span>signup with google</span>
              </div>
            }
            url={"/"}
          />
          <CustomLink
            text={
              <div className={facebookSignup}>
                <FontAwesomeIcon icon={faFacebookF} className={facebookIcon} />
                <span>signup with facebook</span>
              </div>
            }
            url={"/"}
          />
        </div>

        <div className={lineWrapper}>
          <div className={leftLine}></div>

          <div className={textWrapper}>
            <b>or</b>
          </div>

          <div
            style={{ width: "37%", height: "2px", backgroundColor: "#000" }}
            className={rightLine}
          ></div>
        </div>
        <div className={formWrapper}>
          <form ref={FormRef} onSubmit={handleUSerSigUp} className={form}>
            <div ref={inputsRef}>
              <CustomInput
                type={"text"}
                name={"fullName"}
                placeholder={"fullname"}
                className={input}
                onChange={handleChange}
                value={formValue.fullName}
                isRequired={true}
                color={"black"}
              />

              <CustomInput
                type={"number"}
                name={"phoneNumber"}
                placeholder={"Phone Number"}
                className={input}
                value={formValue.phoneNumber}
                onChange={handleChange}
                isRequired={true}
              />

              <CustomInput
                type={"email"}
                name={"email"}
                placeholder={"Email"}
                className={input}
                value={formValue.email}
                onChange={handleChange}
                isRequired={true}
              />

              <CustomInput
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                className={input}
                value={formValue.password}
                onChange={handleChange}
                isRequired={true}
              />
              <CustomInput
                type={"password"}
                name={"confirmPassword"}
                placeholder={"Confirm Password"}
                className={input}
                value={formValue.confirmPassword}
                onChange={handleChange}
                isRequired={true}
              />
            </div>
            <Button
              text={"create account"}
              name={"signup"}
              className={button}
              click={handleSignNavigation}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signup);
