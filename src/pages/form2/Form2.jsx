import React from "react";
import "./form2.css";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import Detail from "../../components/detail/Detail";
import Notes from "../../components/notes/Notes";
import Sig from "../../components/signature/Sig";
import Footer from "../../components/footer/Footer";
import jsPDF from "jspdf";

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
        <Title />
        <Detail />
        <Notes />
        <Sig />
        <hr />
        <Footer />
        <button onClick={generatePDF} type="primary">
          طباعة الشهادة
        </button>
      </div>
    </>
  );
};

export default Form2;
