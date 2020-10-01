import React from "react";
import classes from "./Experience.module.css"
import Section from "../section/section";
import pic from "../../assets/pic_1.png";

const Experience = () => {
  return (
    <section className={classes.Experience}>
      <Section
        title="Amazing Experiences from Our Wonderful Customers"
        content="Here is what customers and vendors are saying about us, you can
            share your stories with us too"
        img={pic}
      ></Section>
    </section>
  );
};

export default Experience;
