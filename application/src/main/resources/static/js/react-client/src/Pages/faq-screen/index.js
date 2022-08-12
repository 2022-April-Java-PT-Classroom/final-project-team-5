import { React, useState } from "react";

import Question from "../faq-screen/question.js";
import data from "./data";
import style from './style.module.scss';

function Apps() {
  const [question, setQuestion] = useState(data);
 
 
  return (
    <main className={style.faqcontainer}>
      <header className="">
        <h3 className={style.faqtitle}>Frequently asked Questions</h3>
      </header>
      <section>
        {question.map((quest) => {
          return <Question key={quest.id} {...quest} />;
        })}
      </section>
    </main>
  );
}

export default Apps; 