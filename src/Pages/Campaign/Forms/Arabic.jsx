import React from "react";
import { Helmet } from "react-helmet";

export const ArBody = () => (
  <div style={{ direction: "rtl" }}>
    <h2>هل ستساعدنا في بناء مجتمع ناشطين عالمي قوي مكون من 100,000 عضو؟</h2>
    <p>
      تنبع قوتنا من تضامننا. كلما زاد عدد من يتخذون إجراءات من بيننا عبر الحدود
      والقطاعات، كلما تمكنّا من إظهار قوتنا الجماعية لصنّاع القرار والرؤساء
      والعالم.
      <br />
      <br />
      نحن مجتمع من الناشطين على مستوى العالم، نناصر حقوق العمال والمساواة
      الاجتماعية
      <br />
      <br />
      هل تود المشاركة في فعاليات الحملات والاستجابة لقضايا طارئة وقت حدوثها؟
      <br />
      <br />
      انضم إذن إلى مجتمع من الناشطين على مستوى العالم عن طريق ملء نموذج التواصل
      <br />
      <br />
      سيتم الحفاظ على سرية معلوماتك الشخصية والاحتفاظ بها بشكل آمن من قبا.
      تقديمك للمعلومات يعني موافقتك على استخدام البيانات وملفات تعريف الارتباط
      وفقًا لسياسة الخصوصية لدينا
    </p>
  </div>
);

export const Arabic = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://actionnetwork.org/css/style-embed-v3.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://actionnetwork.org/widgets/v5/form/handraiser-web-es?format=js&source=widget"></script>{" "}
      </Helmet>

      <div id="can-form-area-handraiser-web-ar"></div>
    </>
  );
};
