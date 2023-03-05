import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
      <div className="w-[60%] p-8 text-gray-400 text-xs">
        <p className="pb-8">Question? Call 1-866-579-7172</p>
        <div className="grid grid-cols-4 items-center justify-center text-center gap-4 max-sm:grid-cols-2 max-lg:grid-cols-3">
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Account</a>
          <a href="#">Media Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Redeem Gift Cards</a>
          <a href="#">Buy Gift Cards</a>
          <a href="#">Corporate Information</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Netflix Originals</a>
          <a href="#">Contact Us</a>
          <a href="#">Speed Test</a>
          <a href="#">Legal Notices</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
