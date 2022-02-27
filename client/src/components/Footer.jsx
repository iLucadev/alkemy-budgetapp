import React from "react";
import gitHub from "../assets/images/github.png";
import linkedIn from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="mt-auto h-28 flex flex-col items-center justify-center space-y-4">
      <p className="text-base font-sans antialiased text-gray-600/75">
        2022 Lucas Iriarte. Alkemy boost. All rights reserved.
      </p>
      <div className="flex list-none space-x-8 opacity-70">
        <li>
          <a href="https://www.linkedin.com/in/lucasdanieliriarte/">
            <img src={linkedIn} alt="" width="24px" />
          </a>
        </li>
        <li>
          <a href="https://github.com/iLucadev/">
            <img src={gitHub} alt="" width="24p" />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
