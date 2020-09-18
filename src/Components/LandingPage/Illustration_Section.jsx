import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBiking,
} from "@fortawesome/free-solid-svg-icons";
import IllustrationStyle from "../../Styles/LandingPageStyles/IllustrationStyle.module.css";
import { faPaypal, faDelicious } from "@fortawesome/free-brands-svg-icons";

const Illustration_Section = () => {
  const {
    section,
    title,
    option,
    search,
    icon,
    select,
    pay,
    delivery,
  } = IllustrationStyle;
  return (
    <section className={section}>
      <div className={title}>
        <h2>how it works</h2>
      </div>
      <div className={option}>
        <div className={search}>
          <FontAwesomeIcon icon={faSearch} className={icon} size="3x" />
          <span>search</span>
        </div>
        <div className={select}>
          <FontAwesomeIcon icon={faShoppingCart} className={icon} size="3x" />
          <span>select</span>
        </div>
        <div className={pay}>
          <FontAwesomeIcon icon={faPaypal} className={icon} size="3x" />
          <span>pay</span>
        </div>
        <div className={delivery}>
          <FontAwesomeIcon icon={faBiking} className={icon} size="3x" />
          <span>delivery</span>
        </div>
      </div>
    </section>
  );
};

export default Illustration_Section;
