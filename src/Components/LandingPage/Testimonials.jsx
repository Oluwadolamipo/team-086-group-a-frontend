import React, { useContext } from "react";
import { NonRegisterContextMembers } from "../../Context/NonRegisteredMemberContext";
import CustomImage from "../../Common/Image.component/Image";
import TestimonailsStyles from "../../Styles/LandingPageStyles/Testimonials.module.css";

const Testimonials = () => {
  const [state] = useContext(NonRegisterContextMembers);
  const { collection } = state;
  const { testimonials } = collection;
  const {
    section,
    titleWrapper,
    tag,
    title,
    testimony,
    testimonyContainer,
    testimonyWrapper,
    texts,
    testifierInfo,
    pix,
    testifierDesc,
  } = TestimonailsStyles;
  console.log(testimonials);

  return (
    <section className={section}>
      <div className={titleWrapper}>
        <div className={tag}></div>
        <div className={title}>
          <h2>testimonials</h2>
        </div>
      </div>
      <div className={testimony}>
        {testimonials &&
          testimonials.map(({ text, image, name, job, _id }) => (
            <div className={testimonyContainer}>
              <div key={_id} className={testimonyWrapper}>
                <div className={texts}>
                  <p>{text}</p>
                </div>
                <div className={testifierInfo}>
                  <CustomImage
                    src={image}
                    alt={"testimonies"}
                    className={pix}
                  />
                  <div className={testifierDesc}>
                    <strong>{name}</strong>
                    <em>{job}</em>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
