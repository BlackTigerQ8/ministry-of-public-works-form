import React from "react";
import "./sig.css";

const Sig = () => {
  return (
    <>
      <div className="sig-container">
        <h2>
          الوكيل المساعد لقطاع المركز الحكومي <br /> للفحوصات وضبط الجودة
          والأبحاث
        </h2>

        <ul dir="rtl">
          <li>مدير إدارة مختبرات الطرق بالإنابة (م. الهام الحساوي)</li>
          <li>رئيس قسم الأسفلت بالندب (م. مهدي القلاف)</li>
          <li>م. عبدالرحمن الشمري</li>
        </ul>
      </div>

      {/* <div className="sub-sig-container">
      <ul dir="rtl">
          <li>مدير إدارة مختبرات الطرق بالإنابة (م. الهام الحساوي)</li>
          <li>رئيس قسم الأسفلت بالندب (م. مهدي القلاف)</li>
          <li>م. عبدالرحمن الشمري</li>
        </ul>
      </div> */}

      <div className="date-container">
        <div className="col">
          <div className="row">
            <input type="date" />
            <p>:التاريخ</p>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <input type="text" />
            <p>:إشارة الطرق</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sig;
