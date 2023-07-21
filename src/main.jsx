import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services'
import About from './components/About'
import ScrollUp from './components/ScrollUp'
import OurServices from './components/OurServices'
import Work from './components/Work'
import Team from './components/Team'
import { Plan } from './components/Plan'
import Blog from './components/Blog'
import Form from './components/Form'
import Footer from './components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Services />
    <About />
    <ScrollUp />
    <OurServices />
    <Work />
    <Team />
    <Plan />
    <Blog />
    <Form />
    <Footer />
  </React.StrictMode>,
)
