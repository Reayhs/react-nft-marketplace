import React from "react";

function Footer() {
  return (
    <>
       <hr/>
    <footer className="footer p-20 text-base-content tl:p-6">
      <div>
        <div className="flex items-center  gap-4">
          <i className="fa-regular fa-fire-flame-curved bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)] text-4xl "></i>
          <h1 className="bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)]  text-5xl font-bold">
            {" "}
            ReNFTs
          </h1>
        </div>

        <p>
          NFTs Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    </>
  );
}

export default Footer;
