import React, { useContext, useRef } from "react";
import SignUpStyles from "../../../Styles/SignUp.module.css";
import Button from "../../../Common/Button.component/Button";
import CustomInput from "../../../Common/Input.component/Input";
// import axios from "axios";
import { NonRegisterContextMembers } from "../../../Context/NonRegisteredMemberContext";

//
const Signup = () => {
  //function for SignUp users
  const [datas, setData] = useContext(NonRegisterContextMembers);
  const { container, formWrapper, form, input, button } = SignUpStyles;
  const FormRef = useRef();
  const inputsRef = useRef();
  const { formValue } = datas;

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
    if (fullName === "") {
      alert("Full name must not be left empty");
      inputsRef.current.firstChild.parentNode.children.fullname.focus();
      return false;
    } else if (isNumeric(fullName)) {
      alert("Number is not an option");
      inputsRef.current.firstChild.parentNode.children.fullname.focus();
      return false;
    } else if (phoneNumber === "") {
      alert("Number must not be left empty");
      inputsRef.current.firstChild.parentNode.children.phoneNumber.focus();
      return false;
    } else if (email === "") {
      alert("Email must not be left empty");
      inputsRef.current.firstChild.parentNode.children.email.focus();
      return false;
    } else if (!email.includes("@" && ".")) {
      alert(`@ or . missing`);
      inputsRef.current.firstChild.parentNode.children.email.focus();
      return;
    } else if (password === "") {
      alert("Password must not be left empty");
      inputsRef.current.firstChild.parentNode.children.password.focus();
      return false;
    } else if (password.length < 8) {
      alert("Password must not be less 8 characters");
      inputsRef.current.firstChild.parentNode.children.password.focus();
      return false;
    } else if (confirmPassword.length < 8) {
      alert("confirm password must not be less 8 characters");
      inputsRef.current.firstChild.parentNode.children.confirmPassword.focus();
      return false;
    } else if (confirmPassword !== password) {
      alert("Password does not match");
      inputsRef.current.firstChild.parentNode.children.confirmPassword.focus();
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
    console.log("formData", userObject);
    FormRef.current.reset(); //reset form on submit
    alert("sign up successfully");
    // this.props.signin(); //routing to signin page on componentdid update
    try {
      // await axios.post("http://endPoint/", userObject)
    } catch (error) {
      console.error(error);
    }
  };

  // const { input, button, signUpForm } = SignUpStyles; //destructured styles from the style.module

  return (
    <div className={container}>
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
          <Button text={"Sign up"} name={"signup"} className={button} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
