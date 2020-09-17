import React, { useState } from "react";

const RegisterContextMembers = React.createContext([{}, () => {}]);

const RegisteredMemberContextProvider = (props) => {
  const [registeredMemberScreens, setRegisteredMemberScreens] = useState({
    collection: {},
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

export { RegisterContextMembers, RegisteredMemberContextProvider };
