import React, { useState } from "react";
const registerContextMembers = React.createContext({}, () => {});

const RegisteredMemberContext = (props) => {
  const [registeredMemberScreens, setRegisteredMemberScreens] = useState({});
  return (
    <registerContextMembers.provider
      value={[registeredMemberScreens, setRegisteredMemberScreens]}
    >
      {props.children}
    </registerContextMembers.provider>
  );
};

export { RegisteredMemberContext, registerContextMembers };
