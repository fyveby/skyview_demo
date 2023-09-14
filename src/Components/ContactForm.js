import React from 'react'

function ContactForm() {
  return (
    <div className="d-flex border justify-content-center align-items-center"
        style={{ height: "100%", width: "100%" }}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPjO4k40MhOHnIl4YK0Bw1X1Jo7AixbmGnzViF--wSh-TivA/viewform?embedded=true"
                title="Contact"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{ width: "85%", height: "85%" }}>
                Loading…
              </iframe>
      
    </div>
  )
}

export default ContactForm
