import React from "react";
import classes from "./section.module.css";

const Section = (props) => {
  return (
    <div className={classes.section}>
      <div className={[classes.container, props.container].join(" ")}>
        <div className={classes.content}>
          <div>
            <h2>{props.title}</h2>

            <p>{props.content}</p>
          </div>
        </div>
        <div className={classes.img__container}>
          <div className={classes.section__img}>
            <div className={classes.section__circle}></div>
            <div className={classes.img}>
              <img src={props.img} alt="mypic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
