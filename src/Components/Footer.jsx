
import React from 'react';
import facbook  from '../assets/facebookicon.svg'
import instagram from '../assets/instaicon.svg'
import twitter from '../assets/xicon.svg'
import youtube from '../assets/youtubeicon.svg'
import tiktok from '../assets/tiktok.svg'
import gmail from "../assets/gmailicon.svg"
import telephone from "../assets/telephone.png"
import location from "../assets/location.png"
function Footer() {
  return (
    <>
      <style>
        {`
          .main-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2rem 5rem;
            gap: 1rem;
          }

          .page-links, .last-container, .branding {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            min-width: 200px;
          }
.branding h2{
            margin: 0;}
          .branding h3 {
          margin:  0;
            font-weight:600;
            font-size:1.2rem;
            max-width: 20rem;
            color: #555;
          }

          .page-links h1,
          .last-container h1 {
            color: black;
            font-size: 1.2rem;
          }

          .page-links div {
            font-size: 0.9rem;
            color: grey;
          }
            .icons{
            margin: 0.5rem 0.5;
            display: flex;
            gap: 1rem;
           
            margin-top: 1rem;
          }
            .icons div{
             width:1.8rem;
            hight: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
                     background-color:#057C8B;
border-radius: 50%;
            }
            .icons img{
            width: 1rem;
            cursor: pointer;
   
        
          }
            .last-container{
            margin: 0.5rem 0.5;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            }
.last-container div {
            font-size: 1rem;
            color: grey;
            gap: 1rem;
            display: flex;
            align-items: center;
          }
            .last-container img{
            width: 1.5rem;
            cursor: pointer;
            margin-right: 0.5rem;
          }
          
        `}
      </style>

      <div className="main-container">
        <div className="branding">
          <h2>AURA</h2>
          <h3>Stay up to date on the latest features and releases by joining our socials</h3>
          <div className='icons'>
<div>
    <img src={twitter} alt="" />
</div>
<div>
    <img src={instagram} alt="" />
</div>
<div>
    <img src={facbook} alt="" />
</div>
<div>
    <img src={youtube} alt="" />
</div>
<div>
    <img src={tiktok} alt="" />
</div>



          </div>
        </div>

        <div className="page-links">
          <h1>Pages</h1>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>FAQs</div>
          <div>Error 404</div>
        </div>

        <div className="last-container">

          <h1>Address</h1>
          <div> <img src={gmail} alt=""/>
            testing@gmail.com</div>
          <div> <img src={telephone} alt="" />+1234567890</div>
          <div> <img src={location} alt="" />Amsterdam, NL</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
