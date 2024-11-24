import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faLaravel,
  faMicrosoft,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'; // Import the Loader component

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
        "I'm a highly driven backend developer seeking a role in an established IT company, where I can leverage my skills to design and implement scalable, efficient, and secure systems using the latest technologies."
        </p>
        <p>
        "I have extensive experience working on backend systems, including implementing algorithms in Spring Boot, developing RESTful APIs in Spring and PHP, and integrating complex services using Laravel. While proficient in frontend technologies like HTML, CSS, JavaScript, and React, my primary expertise lies in creating robust server-side solutions."               </p>
        <p>
        "If I were to define myself in one sentence, it would be: a backend enthusiast, a problem solver, and a tech-driven innovator."
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faLaravel} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faMicrosoft} color="#EC4D28" />
          </div>
        </div>
      </div>

      {/* Loader animation */}
      <Loader type="pacman" />
    </div>
  );
};

export default About;
