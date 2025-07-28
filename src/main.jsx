import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes ,Route} from 'react-router'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Body from './Components/Body.jsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route path="" element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      
      </Route>

      </Routes>
   

    <App />
       </BrowserRouter>
  </StrictMode>,

)
