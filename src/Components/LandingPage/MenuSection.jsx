import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image.jsx";
import MenuStyles from "../../Styles/LandingPageStyles/Menu.module.css";

const SpecialOffer = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { menus } = collection;
  const {
    section,
    CategoryWrapper,
    CategoryName,
    tag,
    cat,
    menuWrapper,
    contentWrapper,
    imgField,
    subCategory,
    subCat,
    img,
    itemCaption,
  } = MenuStyles;

  return (
    <section className={section}>
      <div className={CategoryWrapper}>
        <div className={CategoryName}>
          <div className={tag}></div>
          <div className={cat}>
            <h2>menu</h2>
          </div>
        </div>
      </div>
      <div className={menuWrapper}>
        {menus &&
          menus.map(({ category, image, name, price, _id }) => (
            <div key={_id} className={contentWrapper}>
              <fieldset className={imgField}>
                <div className={subCategory}>
                  <h3 className={subCat}>{category}</h3>
                </div>
                <CustomImage src={image} alt={"food display"} className={img} />
              </fieldset>
              <figcaption className={itemCaption}>
                <h3>{name}</h3>
                <span>${price}</span>
              </figcaption>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SpecialOffer;
