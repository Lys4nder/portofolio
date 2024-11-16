import React from "react";
import "../components/index.css";
import Navbar from "../components/navbar";
import TechStack from "./techstack";

const IndexPage = () => (
  <>
    <Navbar />
    <main className="landing-page">
      <section>
        <span className="highlight-text">Hi, my name is <br /></span>
        <h1 className="intro-text">
          Lys4nd<span className="last-letter">er_</span>
        </h1>
        <h2 className="under-text">I build backend things.</h2>
        <p className="paragraph-text">
          I am a software engineer with a passion for building things. <br />
          Currently busy studying Software Engineering at Babes-Bolyai <br />
          University of Cluj-Napoca. <br />
          Currently, I am working as a <span className="company-text">SWE @ Soft Extend</span> <br />
        </p>
      </section>
      <section>
          <TechStack />
      </section>
    
    </main>
  </>
);

export default IndexPage;