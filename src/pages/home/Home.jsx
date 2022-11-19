import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main-container">
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

export default Home;
