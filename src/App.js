import './App.css';
import Navbar from './components/Navbar.js'
import Card from './components/Card.js'
import Footer from './components/Footer.js'
import Alert from './components/Alert.js'
import About from './components/About.js'
import News from './components/News.js'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App(props) {
  const [Mode, setMode] = useState('light');
  const toggleMode = () =>{
    if (Mode === 'light'){
      setMode('dark')
      setModeTxt('light')
      setbackColor('secondary')
      setfooterColor('dark')
      document.title = "Kamal | Dark Mode"
      showAlert("The Dark mode has been enabled.", "success")
      setaboutTxt("light")
      setnewsTxt("light")
      setcardBG("light")
    }
    else{
      setMode('light')
      setModeTxt('dark')
      setbackColor('muted')
      setfooterColor('light')
      document.title = "Kamal | Light Mode"
      showAlert("The Light mode has been enabled.", "success")
      setaboutTxt("dark")
      setnewsTxt("dark")
      setcardBG("dark")
    }
  }

  const showAlert = (message, type) =>{
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const [alert, setalert] = useState(null)
  const [ModeTxt, setModeTxt] = useState('Dark')
  const [backColor, setbackColor] = useState('light')
  const [footerColor, setfooterColor] = useState('light')
  const [aboutTxt, setaboutTxt] = useState('dark')
  const [newsTxt, setnewsTxt] = useState("dark")
  const [cardBG, setcardBG] = useState("dark")


  return (
    <Router>
      <div className={`bg-${backColor} App`}>
        <Navbar Mode={Mode} toggleMode={toggleMode} ModeTxt = {ModeTxt}/>
        <Alert alert = {alert}/>
        <Routes>
          <Route path="/about" element={<About Mode={aboutTxt}/>} />
          <Route path="/" element={<Card Mode={Mode}/>} />
          <Route path="/news" element={<News newsTxt={newsTxt} cardBg={cardBG}/>} />
        </Routes>
        <Footer Mode={footerColor}/>
      </div>
    </Router>
  );
}

export default App;