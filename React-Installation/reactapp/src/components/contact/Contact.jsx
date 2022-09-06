import React from 'react'
import "./contact.css"
import emailjs from 'emailjs-com'

export default function Contact() {
  
  /* 
    npm install emailjs-com --save
    or
    yarn add emailjs-com
  */

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }  

  return (
    <div className="contact">
      <form onSubmit={sendEmail}>
        <div><input type="text" placeholder="Full Name" name="from_name" /></div>
        <div><input type="email" placeholder="Email ID" name="email_id" /></div>
        <div><textarea placeholder="Message" name="message"></textarea></div>
        <input type="submit" value="Send" />
      </form>
    </div>    
  )
}
