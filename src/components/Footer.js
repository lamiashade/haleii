import React from "react";

const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-copyright">
          <a> &copy; {new Date().getFullYear()} Copyright: Haleii.com </a>
        </div>
      </div>
  );
}

export default Footer;