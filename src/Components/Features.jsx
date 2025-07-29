import React from 'react'
import FeatureCard from './FeatureCard'
import AccessCard from './AccessCard'

function Features() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      <h1 style={{textAlign:"Center"}}>
What Make Us Different From Others ?
      </h1>
      <div style={{display:"flex",flexDirection:"row",gap:"2rem",    marginRight:"2rem"}}>

     
      <div style={{display:"flex",gap:"2rem",flexWrap:"wrap",width:"70%"}}>
<FeatureCard Title="Career Counseling"
 Description="Expert counseling to help you choose the right path and grow confidently."/>
 <FeatureCard Title="Certified Courses" 
 Description="Industry-recognized programs designed for real-world cosmetology careers.

"/>
<FeatureCard Title="Expert Mentorship" 
Description="Learn from experienced, practicing professionals in the aesthetics field"/>
<FeatureCard Title="Hands-On Studio" Description="Train in a live cosmetology setup with real client practice."/>
      </div>
      <AccessCard/>
       </div>
    </div>
  )
}

export default Features
