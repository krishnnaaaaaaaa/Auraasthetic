
import React from 'react';

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
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }

          
        `}
      </style>

      <div className="main-container">
        <div className="branding">
          <h2>AURA</h2>
          <h3>Stay up to date on the latest features and releases by joining our socials</h3>
          <div className='icons'>


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
          <div>testing@gmail.com</div>
          <div>+1234567890</div>
          <div>Amsterdam, NL</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
