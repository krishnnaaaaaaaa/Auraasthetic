import React from 'react'
import img from "../assets/IntroSectionimg.jpg"
function IntroSection() {
  return (
    <div style={{backgroundColor:"#057C8B",display:"flex",margin:"2rem 0",justifyContent:"space-between",
    padding:"2rem 1rem"}}>
        <div style={{width:"100%",height:"100%",margin:"0 2rem"}}>
<img  style={{
        width:"100%",borderRadius:"3rem",height:"100%"
      }}src={img} alt="" />
        </div>
      
      <div>
        <div style={{backgroundColor:"white",color:"#057C8B",borderRadius:"4rem",width:"70%",margin:"0 2rem"}}>
  <h1 style={{fontSize:"38px"}}>
Who We Are ?
        </h1>
        </div>
      <div style={{maxWidth:"80%",fontSize:"20px",fontWeight:"700",display:"flex",flexDirection:"column"}}>
  <p style={{color:"white"}}>
Welcome to Aura Aesthetics Cosmetology Clinic & Training Center (AACCTC), a premier beauty school 
dedicated to providing students with exceptional training and education in the field of cosmetology.
        </p>
        <p style={{color:"white"}}>
             Our mission is to equip our students with the knowledge, skills, and tools necessary to succeed in the beauty industry. We offer courses, including hair 
             care and skin care, all taught by experienced doctors who are passionate about mentoring.
        </p>
      </div>
      
      </div>
    </div>
  )
}

export default IntroSection
