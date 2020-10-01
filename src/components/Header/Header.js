import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__1}>
        <div className={classes.container}>
          <div>
            <p>
              <span className={classes.vasiti}>Vasiti</span>
              <span className={classes.com}>.com</span>
            </p>
          </div>
          <div className={classes.link__container}>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/">Stories</a>
              </li>
              <li>
                <a href="/story">Contact</a>
              </li>
              <li>
                <a href="/about">Login</a>
              </li>
              <li className={classes.signUp}>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.Header__2}>
        <div className={classes.container__2}>
          <ul className={classes.container__links}>
            <li>
              <a href="/">MarketPlace</a>
            </li>
            <li>
              <a href="/">Wholesale Center</a>
            </li>
            <li>
              <a href="/">Seller Center</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Internships</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
