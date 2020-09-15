import React from "react";
import CustomLinks from "../../Common/Link.component/Link";
const NotFound = () => {
  return (
    <div>
      <div>
        <h2>Sorry page not found</h2>
      </div>

      <div>
        <p>
          you may proceed to the registration page{" "}
          <CustomLinks
            text={"Sign up"}
            url={`/team-086-group-a-frontend/signin`}
            color={"blue"}
          />
        </p>
        <p>thanks</p>
      </div>
    </div>
  );
};

export default NotFound;
