import React from "react";
import "./header.css";
import Icon from "../icon/icon";
import Text from "../text/text";

const Header = ({ children, icon, title }) => (
  <div className="header">
    <div className="header-title">
      <Icon icon={icon} />
      <Text title={title} />
    </div>
    {children}
  </div>
);

export default Header;
