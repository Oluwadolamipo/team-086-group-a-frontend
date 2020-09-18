import React, { useState } from "react";
import Bugger from "../Asset/Rectangle 19.svg";
import Soup from "../Asset/Rectangle 680.svg";
import Ellipse from "../Asset/Ellipse 75.svg";
import Plantain from "../Asset/Rectangle 676.svg";
import ManImag from "../Asset/Rectangle 20.png";
import Juice from "../Asset/Rectangle 27.png";
const NonRegisterContextMembers = React.createContext([{}, () => {}]);

const NonRegisteredMemberContextProvider = (props) => {
  const [nonRegisteredMemberScreens, setNonRegisteredMemberScreens] = useState({
    searchData: "",
    regValue: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      formData: [],
    },
    collection: {
      specialOffers: [
        { image: Bugger, name: "bugger", price: 60 },
        { image: Ellipse, name: "american buggar", price: 60 },
        { image: Bugger, name: "", price: 60 },
      ],
      menu: [
        { image: Soup, name: "shrimp with garlic", price: 60 },
        { image: Plantain, name: "plantain", price: 60 },
        { image: Soup, name: "shrimp with garlic", price: 60 },
      ],
      testimonials: [
        {
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum deserunt atque quas obcaecati quibusdam fugit saepe odit commodi repellendus similique placeat, rerum vitae tenetur inventore, quasi ab. Libero, ab.",
          image: ManImag,
          name: "ralph belloa",
          job: "c.e.o mvstri & co",
        },
        {
          text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum deserunt atque quas obcaecati quibusdam fugit saepe odit commodi repellendus similique placeat, rerum vitae tenetur inventore, quasi ab. Libero, ab.",
          image: ManImag,
          name: "ralph belloa",
          job: "c.e.o mvstri & co",
        },
      ],
      vendorsIcon: [Plantain, Juice, Soup, Ellipse, ManImag, Juice],
      blogs: [
        { image: Plantain, info: "best plaintain combinations" },
        { image: ManImag, info: "top 5 resturants in lagos" },
        { image: Juice, info: "mango: the golden fruit" },
      ],
    },
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
