import React, { useContext, useRef } from "react";
import SigninStyles from "../../../Styles/Signin.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomInput from "../../../Common/Input.component/Input";
import CustomLink from "../../../Common/Link.component/Link";
import CustomImage from "../../../Common/Image.component/Image";
import RegImage from "../../../Asset/Rectangle 105.png";
// import axios from "axios";
import { NonRegisterContextMembers } from "../../../Context/NonRegisteredMemberContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import FacebookLogin from "react-facebook-login";
//
const Signin = () => {
  //function for SignUp users
  const [datas, setData] = useContext(NonRegisterContextMembers);
  const {
    container,
    imageView,
    image,
    asideWrapper,
    signinText,
    signinLinks,
    googleSignin,
    googleIcon,
    facebookSignin,
    facebookIcon,
    lineWrapper,
    leftLine,
    textWrapper,
    rightLine,
    formWrapper,
    form,
    input,
    button,
  } = SigninStyles;
  const FormRef = useRef();
  const inputsRef = useRef();
  const { formValue } = datas;

  const handleChange = ({ target }) => {
    //function to handle input value onchange
    setData((formData) => ({
      ...formData,
      formValue: { ...formValue, [target.name]: target.value },
    }));
  };

  const handleUSerSigUp = async (e) => {
    e.preventDefault();

    const { email, password } = formValue;

    //conditionion the input value datas
    if (email) {
      alert("Email or Password is incorrect");
      inputsRef.current.children[0].firstChild.focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must not be less 8 characters");
      inputsRef.current.children[1].firstChild.focus();
      return false;
    }

    //adding the userInformations to an object
    let userObject = {
      email,
      password,
    };

    console.log(userObject);

    FormRef.current.reset(); //reset form on submit
    alert("sign in successfully");

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
        <div className={signinText}>
          <h2>sign in</h2>
        </div>
        <div className={signinLinks}>
          <CustomLink
            text={
              <div className={googleSignin}>
                <FontAwesomeIcon icon={faGoogle} className={googleIcon} />
                <span>signin with google</span>
              </div>
            }
            url={"/"}
          />
          <CustomLink
            text={
              <div className={facebookSignin}>
                <FontAwesomeIcon icon={faFacebookF} className={facebookIcon} />
                <span>signin with facebook</span>
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
            </div>
            <Button text={"log in"} name={"signin"} className={button} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
