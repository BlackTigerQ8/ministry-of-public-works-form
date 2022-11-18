import React from "react";
import "./header.css";
import NewKw from "../../images/new-kw.png";
import KwLogo from "../../images/kw-logo.png";

const Header = () => {
  return (
    <>
      <div className="h-container">
        <img src={NewKw} alt="" className="col logo-1" />
        <div className="col title">
          <h2>
            وزارة الأشغــال العامــة
            <br />
            Ministry of Public Works
          </h2>
        </div>
        <img src={KwLogo} alt="" className="col logo-2" />
      </div>
    </>
  );
};

export default Header;
