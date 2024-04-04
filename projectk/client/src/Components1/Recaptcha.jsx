import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCaptchaVerified) {
      console.log("Login button clicked and ReCAPTCHA verified");
    } else {
      alert("Please verify the ReCAPTCHA");
    }
  };

  const onChange = () => {
    setIsCaptchaVerified(true);
  };

  return (
    <div>
      <center>
        <h1>Recaptcha here</h1>
      </center>
      <div>
        <center>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter your email"
                autoCapitalize="off"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password : </label>
              <input type="password" placeholder="enter your password" />
            </div>
            <br />
            <ReCAPTCHA sitekey="6LeDvKQpAAAAAOV1E4YFO_mtTuYwV10huYr5lwPf" onChange={onChange} />
            <br />
            <button type="submit" disabled={!isCaptchaVerified}>
              Login
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Recaptcha;
