import React from "react";

function FAQItem(props) {
    const id = props.id;
    const question = props.question;
    const answer = props.answer;
    const areaExpandable = props.areaExpandable;
    const style = {fontSize: 18}
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#"+id}
          aria-controls={id}
          style={style}
        >
          {question}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body" style={style}>
          {answer}
        </div>
      </div>
    </div>




  );
}

export default FAQItem;
