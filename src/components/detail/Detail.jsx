import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <>
      <div className="detail-container info">
        <div className="row">
          <div className="col">
            <div className="row">
              <input type="text" placeholder="ادخل اسم مقدم الطلب" />
              <h3 className="text-detail">:مقدم الطلب</h3>
            </div>
            <div className="row">
              <input type="text" placeholder="ادخل الرقم الآلي" />
              <h3 className="text-detail">:الرقم الآلي</h3>
            </div>

            <div className="row">
              <input type="text" placeholder="ادخل السعة" />
              <h3 className="text-detail">:السعة</h3>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <input type="text" placeholder="ادخل رقم الطلب" />
              <h3 className="text-detail">:رقم الطلب</h3>
            </div>
            <div className="row">
              <input type="text" placeholder="ادخل العنوان" />
              <h3 className="text-detail">:العنوان</h3>
            </div>

            <div className="row">
              <input
                type="text"
                placeholder="ادخل نوع المصنع والرقم التسلسلي"
              />
              <h3 className="text-detail">:نوع المصنع والرقم التسلسلي</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="row">
          <div className="col left">
            <h2>انتهاء الإعتماد</h2>
            <input type="date" className="sign-date" />
          </div>
          <div className="col right">
            <h2>بداية الاعتماد</h2>
            <input type="date" className="sign-date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
