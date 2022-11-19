import React from "react";
import "./form3.css";
import Header from "../../components/header/Header";
import Title3 from "../../components/title/Title3";
import Detail3 from "../../components/detail/Detail3";
import Notes3 from "../../components/notes/Notes3";
import Sig3 from "../../components/signature/Sig3";
import Footer from "../../components/footer/Footer";
// import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import Size from "../../components/size/Size";

const Form3 = () => {
  // const generatePDF = () => {
  //   var doc = new jsPDF("p", "pt", "a4");
  //   doc.html(document.querySelector("#content"), {
  //     callback: function (pdf) {
  //       pdf.setFont("Scheherazade New");
  //       pdf.save("شهادة معايرة مصنع أسفلت.pdf");
  //     },
  //   });
  // };

  const generatePDF = () => {
    window.print();
  };

  return (
    <>
      <div className="form-container" id="content">
        <Header />
        <hr />
        <Title3 />
        <Detail3 />
        <Size />
        <Notes3 />
        <Sig3 />
        <hr />
        <Footer />
      </div>
      <div className="print-container">
        <button onClick={generatePDF} type="primary">
          طباعة الشهادة
        </button>
      </div>
      <div className="links">
        <ul>
          <Link to="/form1">شهادة معايرة مصنع أسفلت</Link>
          <Link to="/form2">شهادة تحليل الفجوات لمصنع أسفلت</Link>
          <Link to="/form3">
            شهادة اعتماد مخزن صلبوخ <br /> (صلبوخ جابرو ثقيل لأعمال الأسفلت)
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Form3;
