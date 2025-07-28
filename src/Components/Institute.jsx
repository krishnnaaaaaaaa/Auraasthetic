import React from 'react';
import img from "../assets/makeupart.jpg";
import './Institute.css'; 

function Institute() {
  return (
    <div className="institute-container">
    
     <div className='institute-text'>
<h1 style={{backgroundColor:"#057C8B",borderRadius:"3rem",color:"white",padding:"1rem 2rem"}}>
    Aura Cosmetology Training Institute

</h1>
<p>
At Aura, we believe quality education should be accessible to everyone.
 That’s why we offer flexible schedules and affordable pricing to support students from all backgrounds.
</p>
<p>
Our state-of-the-art facility features the latest tools and technology, providing a truly hands-on learning experience. Students practice in a fully equipped cosmetology studio, working on real patients to build confidence and skill.


</p>
<p>
    We foster a supportive, inclusive environment, where every student receives the guidance and mentorship they need to thrive. Whether
     you're entering the beauty industry or looking to advance your career, Aura is the perfect place to begin.
</p>
<p>Start your journey with us —</p>
<p>
     and shape a rewarding career in cosmetology.
</p>
<button className="contact-button">
    Contact Us
</button>
     </div>
      <img src={img} alt="" className="responsive-image" />
    </div>
  );
}

export default Institute;


