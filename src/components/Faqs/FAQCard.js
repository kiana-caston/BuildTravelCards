import React from 'react'
import './FAQs.css'

const ICON_DOWN = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Arrow_bottom.png";

const FAQCard = ({id, question, answer}) => {
  let isAnswerShowing = false;

  function handleClick() {
    if (isAnswerShowing) {
      document.getElementById(`button${id}`).style.transform = "rotate(0deg)"
      document.getElementById(`answer${id}`).style.display = "none";
    } else {
      document.getElementById(`button${id}`).style.transform = "rotate(180deg)"
      document.getElementById(`answer${id}`).style.display = "block";
    }
    isAnswerShowing = !isAnswerShowing;
  }

  return (
    <div className="card-content">
      <div>
        <p className="question-text">{question}</p>
        <button
            id={`button${id}`}
            className="faq-button"
            onClick={handleClick}>
            <img
                className="icon-caret"
                src={ICON_DOWN}
                alt="caret">
            </img>
        </button>
      </div>
      <p id={`answer${id}`} className="answer">{answer}</p>
   </div>
  )
}

export default FAQCard
