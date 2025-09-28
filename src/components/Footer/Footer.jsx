
import React from 'react'
import"./footer.css";
export const Footer = () => {



  
  return (
   <div className="footer-container">
        <div className='back-to-top'>
          <button onClick={()=>{
            window.scrollTo({top:0,behavior:"smooth"})
          }}>Back to top</button>
        </div>
        <div className="footer-links">
          <ul>
              <li>Conditions of Use & Sal</li>
              <li>Privacy Notice</li>
              <li>Interest-Based Ads</li>
          </ul> 
      </div>

        <div className="footer-copy">
         <p> ©2025, Amazon.com, Inc. or its affiliates</p>
        </div>


</div>
  )
}
