import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com" target="blank">
        <FaGithub />
      </a>
      <a href="https://Telegram.com" target="blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
