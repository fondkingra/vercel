import React from 'react';
import { faTwitter, faGithub, faLinkedin, faInstagram, faReddit, faDiscord, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialBox from '../Components/SocialBox';
import NavBar from '../Components/NavBar';

const Contact = () => {
  return (
    <div
      className="flex flex-col w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/space-adventure-cobra-spaceship.gif')" }}
    >
      <div className=" flex h-30 justify-center">
        <NavBar />
      </div>
      <div className="flex-grow flex flex-col items-center justify-end pb-8">
        {/* First Row */}
        <div className="flex space-x-8 mb-8">
          <SocialBox icon={faTwitter} href="https://twitter.com/yourprofile" />
          <SocialBox icon={faGithub} href="https://github.com/yourprofile" />
          <SocialBox icon={faLinkedin} href="https://linkedin.com/in/yourprofile" />
          <SocialBox icon={faXTwitter} href="https://x.com/yourprofile" />
        </div>

        {/* Second Row */}
        <div className="flex space-x-8">
          <SocialBox icon={faInstagram} href="https://instagram.com/yourprofile" />
          <SocialBox icon={faReddit} href="https://reddit.com/user/yourprofile" />
          <SocialBox icon={faDiscord} href="https://discord.com/invite/yourprofile" />
          <SocialBox icon={faWhatsapp} href="https://wa.me/yourphonenumber" />
        </div>
      </div>
    </div>
  );
};

export default Contact;