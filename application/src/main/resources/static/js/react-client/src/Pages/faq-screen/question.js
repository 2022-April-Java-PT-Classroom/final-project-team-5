import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { React, useState } from "react";

import style from './style.module.scss';

const Question = function ({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className={style.faqscreen}>
      <header className={style.faqquestion}>
        <div className="">
          <h3 className="title">{title}</h3>

          <button className={style.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>

         </div>


       {showInfo && <p>{info}</p>}
      </header>
   </section>
  );
};

export default Question; 
