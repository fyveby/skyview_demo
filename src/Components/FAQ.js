import React from "react";
import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <div
        className="accordion accordian-flush justify-content-center align-items-center"
        id="accordionExample"
        style={{ height: "90%", width: "90%" }}
      >
        <FAQItem
          id="collapseOne"
          question="How do I contact Fyve By to get started?"
          answer="There are three ways to contact Fyve By. You can contact us using this
          same website, click on the “Contact” menu on the side bar. You can
          also schedule a callback for a follow up conversation from
          “Dashboard”. Go to the website Fyveby.com and click on Contact Us."
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
      </div>
    </div>
  );
}

export default FAQ;
