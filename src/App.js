import './App.css';
import './intro.css';
import './banner.css';
import './project.css';
import './about.css';
import './footer.css';
import React, { useEffect, useRef, useState } from 'react';
import Scroll from './scroll';
import DarkModeToggle from './DarkModeToggle';
import Typed from "typed.js";

function App() {
  const { handleSmoothScroll } = Scroll(); // Ensure Scroll.js exports a function that provides handleSmoothScroll
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);

  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [active, setActive] = useState(false); // State for hover effect
  const [projects, setProjects] = useState([]); // State for project names and videos

  // Project and video data
  const projectsData = {
    projects: [
      { name: 'Music Site', video: '/animix.mp4' },
      { name: 'Portfolio', video: 'portfolio.mp4' },
      { name: 'Jarvis - AI', video: '/jarvis.mp4' },
      { name: 'BMI Site', video: '/bmi.mp4' },
      { name: 'Tic Tac Toe', video: '/ttt.mp4' },
      { name: 'Netflix Clone', video: '/netflix.mp4' },
      { name: 'Weather Site', video: '/wheather.mp4' },
      { name: 'Farmer App', video: '/farmerapp.mp4' },
    ],
    videos: [
      { name: 'Hostel edit', video: '/hostel.mp4' },
      { name: 'Cricket', video: '/cricket.mp4' },
      { name: 'Bike', video: '/bike.mp4' },
      { name: 'Minecraft Parkour', video: '/minecraft.mp4' },
      { name: 'Redfort edit', video: '/redfort.mp4' },
      { name: 'Friend league', video: '/fl.mp4' },
    ],
  };

  useEffect(() => {
    // Initially set to projects
    setProjects(projectsData.projects);
  }, []);

  // Function to handle the "Videos" link click
  const handleVideoClick = () => {
    setProjects(projectsData.videos);
  };

  // Function to handle the "Projects" link click
  const handleProjectsClick = () => {
    setProjects(projectsData.projects);
  };

  // Show video on hover
  const handleMouseEnter = (videoSrc) => {
    setActive(true);
    const video = document.getElementById("hover-video");
    video.src = videoSrc; // Set video source
    video.play().catch(error => {
      console.error("Play was prevented:", error);
    });
  };

  // Hide video when not hovering
  const handleMouseLeave = () => {
    setActive(false);
    const video = document.getElementById("hover-video");
    if (!video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Move video with cursor and prevent overflow
  const handleMouseMove = (e) => {
    const videoDiv = document.querySelector(".video-div");
    const videoWidth = videoDiv; // Use offsetWidth to get actual width
    const videoHeight = videoDiv; // Use offsetHeight to get actual height
    const offsetX = e.clientX + 150; // Offset to the right
    const offsetY = e.clientY + 700; // Offset upward

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let finalX = offsetX;
    let finalY = offsetY;

    // Ensure the video doesn't go out of bounds (right and bottom)
    if (offsetX + videoWidth > windowWidth) {
      finalX = windowWidth;
    }
    if (offsetY + videoHeight > windowHeight) {
      finalY = windowHeight;
    }

    videoDiv.style.transform = `translate(${finalX}px, ${finalY}px)`;
  };

  // Typed.js for animated text
  useEffect(() => {
    const options1 = {
      strings: ["Tech-savvy BTech student passionate"],
      typeSpeed: 30,
      showCursor: false,
    };
    const options2 = {
      strings: ["about software engineering. Enjoys"],
      typeSpeed: 40,
      startDelay: 1900,
      showCursor: false,
    };
    const options3 = {
      strings: ["creating videos and pursuing"],
      typeSpeed: 50,
      startDelay: 3900,
      showCursor: false,
    };
    const options4 = {
      strings: ["creative projects. xD"],
      typeSpeed: 60,
      startDelay: 5900,
      showCursor: false,
    };

    const typed1 = new Typed(line1Ref.current, options1);
    const typed2 = new Typed(line2Ref.current, options2);
    const typed3 = new Typed(line3Ref.current, options3);
    const typed4 = new Typed(line4Ref.current, options4);

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
      typed4.destroy();
    };
  }, []);

  // Cursor functionality
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const onMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 400, fill: "forwards" });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Paths for light and dark mode images
  const images = {
    gdsc: darkMode ? "/gdscdark.png" : "/gdsc.png",
    sih: darkMode ? "/sihdark.png" : "/sih.png",
    graavitate: darkMode ? "/graavitate LOGOdark.png" : "/GRAAVITATE LOGO.png",
    wot2: darkMode ? "/wot2 1dark.png" : "/wot2 1.png",
    gbuframe: darkMode ? "/gbuframedark.png" : "/gbuframe.png",
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>

      {/* navbar */}
      <nav className='navbar'>
        <div className='Lnav'>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=amanrai02122004@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <span>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=amanrai02122004@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">amanrai02122004@gmail.com</a>
          </span>
        </div>
        <ul>
          <li><a href="#projects" onClick={handleSmoothScroll}>Projects /</a></li>
          <li><a href="#about" onClick={handleSmoothScroll}>About /</a></li>
          <li><a href="#contact" onClick={handleSmoothScroll}>Contact</a></li>
          <li>
            <DarkModeToggle onToggle={setDarkMode} /> {/* Passing state handler */}
          </li>
        </ul>
      </nav>

      {/* intro */}
      <div className="intro">
        <div className="pfp">
          <img src="/pfp.jpg" alt="Profile" />
        </div>
        <div className="name">Hi, I'm Aman</div>
        <div className="dec">
          <span ref={line1Ref}></span> {/* Line 1 */}
          <br />
          <span ref={line2Ref}></span> {/* Line 2 */}
          <br />
          <span ref={line3Ref}></span> {/* Line 3 */}
          <br />
          <span ref={line4Ref}></span> {/* Line 4 */}
        </div>

        <div className="introbutton">
          <a href="https://kamekaziaman.github.io/Repository/" target="_blank" rel="noopener noreferrer">More me </a>
          <span className="material-symbols-outlined">open_in_new</span>
        </div>
      </div>

      {/* banner */}
      <div className="container">
        <div>
          <img src={images.gdsc} alt="GDSC" />
        </div>
        <div>
          <img src={images.sih} alt="SIH" />
        </div>
        <div>
          <img src={images.graavitate} alt="GRAAVITATE" />
        </div>
        <div className="Pwidth">
          <img src={images.wot2} style={{ width: '110px', height: 'auto' }} alt="WOT2" />
        </div>
        <div>
          <img src={images.gbuframe} alt="GBU Frame" />
        </div>
      </div>

      {/* Projects section */}
      <section id="projects">
        <div className="projectContainer">
          <div className="experiment">Experiments</div>
          <div className="pv">
            <li><a onClick={handleProjectsClick}>Projects</a></li>
            <li><a onClick={handleVideoClick}>Videos</a></li>
          </div>

          {/* Render projects or videos based on the selected section */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="project"
              onMouseEnter={() => handleMouseEnter(project.video)} // Pass the video source
              onMouseLeave={handleMouseLeave}
            >
              <div className="projectname">{project.name}</div>
              <div className="projectnumber">{String(index + 1).padStart(2, '0')}</div>
            </div>
          ))}
        </div>

        {/* Video hover effect */}
        <div className={`video-div ${active ? "active" : ""}`}>
          <video id="hover-video" muted>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section id="about">
        <div className="aboutme">
          <div className="title">About me</div>
          <div className="slogan">“Who decides what your limit is? <br />Instead of overthinking your setbacks, <br />just focus on moving forward.”  ~  Kazi</div>
          <div className="info boxes">
            <div className="1b">
              <h1>Skills & Experience</h1>
              <p>I have a strong foundation in web development (HTML, CSS, JavaScript, react,node js, flask, mongo DB), video editing (Adobe Premiere Pro, Adobe After effect), and a fascination for game development.</p>
            </div>
            <div className="2b">
              <h1>Beyond Work</h1>
              <p>When I’m not coding, I love watching movies and anime. Some of my favorite movies include Iron Man, Avengers: Endgame, The Martian, and John Wick. As for anime, I’m a huge fan of Jujutsu Kaisen, Naruto: Shippuden, and One Piece. I also enjoy playing games like GTA V, Minecraft, and Valorant, which challenge my problem-solving skills and offer a great way to unwind.</p>
            </div>
            <div className="3b">
              <h1>Passions & Hobbies</h1>
              <p>I'm passionate about fitness and staying active. I regularly hit the gym and enjoy playing badminton and cricket whenever I get the chance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                school
              </span>
              <h3>University</h3>
              <p>Gautam buddha university</p>
            </div>
            <div className="footer-section" style={{ fontSize: '26px' }}>
              <span className="material-symbols-outlined">
                location_on
              </span>
              <h3>Location</h3>
              <p>Gaur City Noida</p>
            </div>
            <div className="footer-icons">
              <a href="https://github.com/KamekaziAman" target="_blank"  className="icon"><img src="/g.png" alt="github" /></a>
              <a href="https://www.instagram.com/aman_k.kazi/" target="_blank" className="icon"><img src="/instagram.png" alt="Instagram" /></a>
              <a href="https://pin.it/18QCWkURE"  target="_blank"  className="icon"><img src="/pin.png" alt="Pintrest" /></a>
              <a href="https://x.com/Kamekazi1341439" target="_blank"  className="icon"><img src="/twi.png" alt="Twitter" /></a>
              <a href="https://www.linkedin.com/in/aman-rai-b11048296" target="_blank"  className="icon"><img src="/link.png" alt="LinkedIn" /></a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
