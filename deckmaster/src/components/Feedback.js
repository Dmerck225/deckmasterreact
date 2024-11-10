import React from "react";

export default function Feedback() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "534a0a64-512b-42ec-b00e-7f067c5d49fa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="contact-input">
                <p>Name</p>
                <input type="text" name="name" placeholder="Enter Name" required></input>
            </div>
            <div className="contact-input">
                <p>Email</p>
                <input type="email" name="email" placeholder="Enter Email" required></input>
            </div>
            <div className="contact-input">
                <p>Message</p>
                <input type="text" id="contact-message" name="message" placeholder="Enter Message" required></input>
            </div>
  
            <button type="submit" id="contact-button">Submit</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }