import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "Perhaps those who are best suited to power are those who have never
        sought it."
      </span>
      <br /> <br />
      <span>
        "아마도 힘에 가장 걸맞는 사람은 그 힘을 결코 추구하지 않았던 사람인 것
        같구나."
      </span>
      <span>- J.K 롤링, 해리포터</span>
    </div>
  );
}

export default About;
