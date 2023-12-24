import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black  text-white">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">benefited</header> 
    <a className="link link-hover">developers</a>
    <a className="link link-hover">corporate</a>
    <a className="link link-hover">professionals</a>
    <a className="link link-hover">bankers</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className=" input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
    <div className="flex ">

   <Link to={'https://www.facebook.com/profile.php?id=100024951093797'}> <p className="text-3xl"><FaFacebook /></p></Link>
   <Link to={'https://www.linkedin.com/in/md-akter-3842952a4/'}> <p className="text-3xl ml-3"><FaLinkedin /></p></Link>
        
    </div>
  </form>
</footer>
    );
};

export default Footer;