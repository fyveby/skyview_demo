import React from "react";
import FAQItem from "./FAQItem";
import { Link } from "react-router-dom";
function FAQ() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="accordion justify-content-center align-items-center"
        id="accordionExample"
        style={{ height: "90%", width: "90%" }}
      >
        <FAQItem
          id="collapseOne"
          question="How do I contact Fyve By to get started?"
          answer={
            <p>
              There are two ways to contact Fyve By.
              <br />
              1. You can contact us directly through this website, click{" "}
              <Link to="/demoContact" className="link">
                here
              </Link>{" "}
              or on "Contact Us" on the navigation bar. <br />
              2. You can go to{" "}
              <a
                href="https://www.fyveby.com/contactus"
                className="link"
                target="_blank"
              >
                www.fyveby.com.
              </a>{" "}
            </p>
          }
        ></FAQItem>
        <FAQItem
          id="collapseTwo"
          question="Is there a limit to the number of hangars or the size of hangars?"
          answer="No, our system is flexible and expandable as needed."
        ></FAQItem>

        <FAQItem
          id="collapseThree"
          question="Do I have the option to store hangar video footage?"
          answer="Yes, you can opt-in if you want to store the hangar videos for playback and analysis."
        ></FAQItem>

        <FAQItem
          id="collapseFour"
          question="How much does it cost to store the hangar videos?"
          answer="Pricing is based on storage needs."
        ></FAQItem>

        <FAQItem
          id="collapseFive"
          question="How long does it take to install the system on each hangar?"
          answer="From activation, lead time can vary between 2-4 weeks depending on order logs. Once on site, installation time averages 1-2 day(s) per hangar."
        ></FAQItem>

        <FAQItem
          id="collapseSix"
          question="Do I have to move the airplanes while installing the system?"
          answer="We recommend removing all aircraft from the hangar while overhead maintenance is being performed."
        ></FAQItem>

        <FAQItem
          id="collapseSeven"
          question="Will the application updates interrupt my operations?"
          answer="System updates will be infrequent, however we will work with you on an individual basis to accommodate your schedule."
        ></FAQItem>
        <FAQItem
          id="collapseEight"
          question="Will this discract my crew?"
          answer="We have designed built-in warnings to dissuade tunnel vision."
        ></FAQItem>
        <FAQItem
          id="collapseNine"
          question="Do I still need wing walkers?"
          answer="We recommend having at least one wing walker present before moving aircraft."
        ></FAQItem>
        <FAQItem
          id="collapseTen"
          question="How long does it take to add an aircraft to the hangar?"
          answer=""
        ></FAQItem>
        <FAQItem
          id="collapseEleven"
          question="What is the pricing model for Skyview?"
          answer="We use an install plus lease pricing model with the install cost assessed during a facilities tour."
        ></FAQItem>
      </div>
    </div>
  );
}

export default FAQ;
