import { React, useState } from "react";

import Question from "./question";
import data from "./data";
import style from './style.module.scss';

function App() {
  const [question, setQuestion] = useState(data);
 
 
  return (
    <div className={style.faqcontainer}>
      <header className="faqtitle ">
        <h3 className={style.faqtitle}>Frequently asked Questions</h3>
      </header>
      <section>
      {/* <button className={style.btn} onClick={() => setQuestion(!setQuestion)}>
        </button> */}
        {question.map((request) => {
          return <Question key={request.id} {...request} />;
        })}
      </section>
    </div>
  );
}

export default App; 