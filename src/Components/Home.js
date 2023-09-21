import React from 'react'
import image from '../Images/FyveBy+Logo+w+Text.png'
import { Link } from 'react-router-dom'

function Home() {
  const btnStyle = {
    '--bs-btn-bg': 'E8EAF5',
    '--bs-btn-border-color': '#2B7DA3',
    '--bs-btn-hover-bg': '#2B7DA3',
    '--bs-btn-hover-color': '#E8EAF5',
    '--bs-btn-color': '#2B7DA3'
  }
  const textStyle  = {
    fontSize: "2rem", 
    color: 'inherit'
  }
  return (
//     <div class="container col-xxl-8 px-4 py-5">
//     <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
//       <div class="col-10 col-sm-8 col-lg-6">
//         <img src={image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy"></img>
//       </div>
//       <div class="col-lg-6">
//         <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
//         <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
//         <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//           <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
//           <button type="button" class="btn btn-primary btn-lg px-4">Default</button>
//         </div>
//       </div>
//     </div>
//   </div>
<div>
<div class="row px-4 py-5 my-5 text-center">
  <div className='col-md-4'></div>
  <div className='col-md-4'>
  <img class="mx-auto mb-4" src={image} alt="" width="250" height="250" />
  </div>
  <div className='col-md-4'></div>
    </div>
    
      <div class="row px-4 py-5 my-5 text-center justify-content-center align-items-center">
        <div className='col-lg-6 align-items-center'>
          <Link to='/demo/camera' className='btn btn-lg btn-primary' style={btnStyle}><span className='px-5' style={textStyle}>Click here to watch a Demo</span></Link>
        </div>
        <div className='col-lg-6 align-items-center'>
        <Link to='/demo/contact' className='btn btn-primary btn-lg' style={btnStyle}><span className='px-5' style={textStyle}>Click here to Contact Us</span></Link>
        </div>      
      </div>
      </div>
  
  )
}

export default Home