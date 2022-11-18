import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="f-container">
        <div className="col">
          <p className="ar-footer">
            ص. ب: 8 الكويت – الصفاة 13001 – تلفون 25304000 – فاكس: 25380829 –
            برقيا: الأشغال - الكويت
          </p>
          <p className="en-footer">
            P.O. Box: 8 Safat, 13001, Kuwait -Tel: 25385520 -Fax: 23580829 –
            Cable: Works Kuwait
          </p>
          <p className="web">www.mpw.gov.kw</p>
          <span className="copyright">
            © Copyright created by: Eng. Abdullah Althaydi
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
