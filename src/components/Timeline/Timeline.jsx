import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (

<div>
<div class="wrap">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Start Registrations</span>
          <span>1st June 2022</span>
        </div>
        {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        */}
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">End Registrations</span>
          <span>14th Jul 2022</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Opening Ceremony</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon opening ceremony will start 9:00 AM onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Hackathon Starts</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period will start from 10:30 AM onwards.</p>
       
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Session from GeeksforGeeks</span>
          <span>16th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Session on Complete Interview Preperation by GeeksForGeeks on 11.30 AM Onwards.</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Coming Soon</span>
          <span>16th-17th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Coming soon.</p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Hackathon Ends</span>
          <span>17th July 2022</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Hackathon coding period will end on 10:30 PM.</p>
        
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;