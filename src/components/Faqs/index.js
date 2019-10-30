import React from 'react';
import FAQCard from './FAQCard'
import './FAQs.css'

const faqs = [
  {
    id: 1,
    question: "This is my question?",
    answer: "This is your answer.",
  },
  {
    id: 2,
    question: "I still had some questions so this is my second question which happens to be a lot longer than the first?",
    answer: "Here is an answer to your long question that happens to also be longer than the answer to the first question.",
  }
]

export default function Faqs() {

  return (
    <>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <table className="faq-table">
        <tbody>
          {faqs.map(faq => (
            <tr key={faq.id}>
              <td>
                <FAQCard {...faq}/>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  );
}
