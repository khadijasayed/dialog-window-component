import React from "react";
import Text from "../text/text";
import "./footer.css";

const Footer = ({ children, info }) => (
  <div className="footer">
    {info && <Text title={info} />}
    <div className="footer-actions">{children}</div>
  </div>
);

export default Footer;
