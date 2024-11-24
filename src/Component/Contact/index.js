import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ka6uu17','template_4r5mmto', 
        form.current, 
        '6gY90PooqVqeFBKTLc'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am actively seeking internship opportunities—especially those involving ambitious or large-scale projects where I can apply my skills and grow as a developer. If you have any questions or requests, please don’t hesitate to reach out to me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Manish Acharya,
          <br />
          Nepal,
          <br />
          Kirtipur <br />
         Kathmandu<br />
          <br />
          <span>manishacharya843@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[27.673718, 85.276783]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[27.673718, 85.276783]}>
              <Popup>Manish lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
