import React, { useState } from "react";

const RegisterContextMembers = React.createContext([{}, () => {}]);

const RegisteredMemberContextProvider = (props) => {
  const [registeredMemberScreens, setRegisteredMemberScreens] = useState({
    formValue: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      formData: [],
    },
    collection: null,
  });

  return (
    <RegisterContextMembers.Provider
      //assign the provider values
      value={[registeredMemberScreens, setRegisteredMemberScreens]}
    >
      {props.children}
    </RegisterContextMembers.Provider>
  );
};

export { RegisteredMemberContextProvider, RegisterContextMembers };
