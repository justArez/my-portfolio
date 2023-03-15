import React from "react";
import avatar from "./img/avatar.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="app-header">
      <img src={avatar} className="header-avatar" alt="avatar" />
      <span className="header-title">Kien Cuong | Web Developer</span>
      <ul className="header-nav">
        <li>
          <a className="nav-item" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="nav-item" href="#About">
            Education
          </a>
        </li>
        <li>
          <a className="nav-item" href="#About">
            Experience
          </a>
        </li>
        <li>
          <a className="nav-item" href="#About">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

function Body() {
  return (
    <body className="app-body">
      <div className="about">

      </div>
      <div className="education">

      </div>
      <div className="experience">

      </div>
      <div className="contact">

      </div>
    </body>
  );
}

function Footer() {
  return (
    <footer className="app-footer">

    </footer>
  )
}

export default App;
