import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/m4.png'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'; // Import the Loader component

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray=['a','n','i','s','h']
  const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />

         <br/>
            web developer</h1>
            <h2>Frontend/Backend Developer/React,Spring Boot,Laravel</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
           
        </div>
         <Logo/>
    </div>
    <Loader type="pacman"/>
    </>
   
  )
}
