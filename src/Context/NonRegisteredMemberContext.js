import React, { useState } from "react";
const NonRegisterContextMembers = React.createContext([{}, () => {}]);

const NonRegisteredMemberContextProvider = (props) => {
  const [nonRegisteredMemberScreens, setNonRegisteredMemberScreens] = useState({
    data: ["name"],
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
    <NonRegisterContextMembers.Provider
      value={[nonRegisteredMemberScreens, setNonRegisteredMemberScreens]}
    >
      {props.children}
    </NonRegisterContextMembers.Provider>
  );
};

export { NonRegisterContextMembers, NonRegisteredMemberContextProvider };
