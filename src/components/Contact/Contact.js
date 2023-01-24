import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import IconButton from '@mui/material/IconButton';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Contact.css";

export const Contact = () => {


  const handleCall = () => {
    window.location.href = "tel:+17815680010";
  }
  const socialStyles = {
   fontSize: '35px',
   color: '#000000',
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1>Let's talk</h1>
        <div className="contactButtons">
          <IconButton
            size="large"
            href="mailto:imbruglia100@gmail.com?subject=Looking%20for%20a%20job%3F"
            aria-label="Email"
          >
            <EmailIcon sx={socialStyles} />
          </IconButton>
          {window.screen.width < 712 && (
            <IconButton
              size="large"
              onClick={handleCall}
              aria-label="Email"
            >
              <PhoneIcon sx={socialStyles} />
            </IconButton>
          )}

          <IconButton
            size="large"
            target="_blank"
            href="https://www.linkedin.com/in/frank-imbruglia-095581164/"
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={socialStyles} />
          </IconButton>
          <IconButton
            size="large"
            target="_blank"
            href="https://github.com/imbruglia100"
            aria-label="Github"
          >
            <GitHubIcon sx={socialStyles} />
          </IconButton>
          <IconButton
            size="large"
            target="_blank"
            href="https://www.instagram.com/imbruglia50/"
            aria-label="Instagram"
          >
            <InstagramIcon sx={socialStyles} />
          </IconButton>
        </div>
      </div>
    </section>
  );
};
