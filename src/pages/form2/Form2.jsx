import React from "react";
import "./form2.css";
import Header from "../../components/header/Header";
import Title2 from "../../components/title/Title2";
import Detail from "../../components/detail/Detail";
import Notes2 from "../../components/notes/Notes2";
import Sig from "../../components/signature/Sig";
import Footer from "../../components/footer/Footer";
// import jsPDF from "jspdf";
import { Link } from "react-router-dom";

const Form2 = () => {
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
        <Title2 />
        <Detail />
        <Notes2 />
        <Sig />
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

export default Form2;
