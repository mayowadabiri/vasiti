import React from "react";
import Section from "../section/section";
import classes from "./Clients.module.css";
import pic from "../../assets/pic_2.png";
const Clients = () => {
  return (
    <section className={classes.Clients}>
      <Section
        title="Tolu '&' Joy’s Experience"
        share={true}
        content="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
              img={pic}
              container={classes.container}
      >
        Customer
      </Section>
    </section>
  );
};

export default Clients;
