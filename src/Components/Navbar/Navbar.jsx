import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <section>
      <div className="navbar_side">
        {/* header */}
        <div className="nav_text">
          <h1>Welcome to my portfolio...!</h1>
        </div>

        {/* header icon*/}
        <div className="nav_icon">
          <FaFacebookF className="navbar_icon" />
          <FaLinkedinIn className="navbar_icon" />
          <FaInstagram className="navbar_icon" />
          <FaTiktok className="navbar_icon" />
          <FaYoutube className="navbar_icon" />
        </div>
      </div>

      <div className={`navbar_container ${sticky ? "scroll_bar" : ""}`}>
        <h1>Buth Meta</h1>

        <ul className="nav_body">
          <li className="home_flex">
            <FaHome className="home" />
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Me</a>
          </li>

          <li>
            <a href="#project">Projects</a>
          </li>

          <li>
            <a href="#testimonial">Testimonials</a>
          </li>

          <li>
            <a href="#testimonial">Contact Me</a>
          </li>
        </ul>

        <div className="nav_flex_bottom">
          <div className="word_group">
            <TfiWorld className="word_icon" />

            <div className="flag_logo_container">
              <div className="flag_box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
                  alt=""
                />
                <h2>Khmer</h2>
              </div>

              <div className="flag_box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
                  alt=""
                />
                <h2>English</h2>
              </div>
            </div>
          </div>

          <div className="nav_flex_img">
            <img src="/src/assets/met.jpeg" alt="" />

            <div className="personal_card">
              <div className="head_personal">
                <h1>Personality</h1>
              </div>

              <div className="line_personal"></div>

              <div className="card_self">
                <h2>
                  Name: <span>Buth Meta</span>
                </h2>
                <h2>Major: Computer Science</h2>
                <h2>University: IIC University of Technology</h2>
                <h2>Dream: Software Engeneering</h2>
              </div>
            </div>

            {/* bottom card */}
            <div className="card_bottom">
              <ul className="card_ul">
                <li>Skill</li>
                <li>Ability</li>
                <li>Completing</li>
                <li>Projects</li>
              </ul>

              <ul className="card_ul">
                <li>Writing</li>
                <li>Speaking</li>
                <li>Listening</li>
                <li>Reading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="home_page">
        {/* section text */}
        <div className="home_text_page">
          <h1>Buth Meta</h1>
          <h2>
            I am a{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engeneering",
                1000,
                "UX/UI Design",
                1000,
                "FrontEnd Web",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "40px",
                display: "inline-block",
                color: "#2471a3",
              }}
              repeat={Infinity}
            />{" "}
          </h2>
          <p>
            This is my own portfolio that allow all of you could see on my
            interfaces of web application, and you can seek out of something
            related to my experiences.
          </p>

          <div className="icon_person">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-tiktok"></i>
            <i className="bx bxl-youtube"></i>
          </div>

          <div className="btn_head">
            <button className="btn read">
              Read More <HiOutlineArrowNarrowRight className="arrow" />{" "}
            </button>
            <button className="btn">Log In</button>
          </div>
        </div>

        {/* section img */}
        <div className="home_img">
          <img src="/src/assets/meta.jpeg" alt="" />

          <div className="shadow_img"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
