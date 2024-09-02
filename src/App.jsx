import { useState } from 'react'
import './App.css'
import HamburgerMenu from './HamburgerMenu'
import CarouselGallery from './CarouselGallery'

function App() {

  return (
    <div id='mainContainer'>
      
      {/* FIRST SECTION - HEADER */}
      <div className='header outerBox'>
        <div className="innerBox">
          <a href="#kdoJsme"><img id='logo' src='images/logo.jpg'/></a>
          <ul>
            <li><a href='#kdoJsme'>Kdo jsme</a></li>
            <li><a>Nabídka</a></li>
            <li><a>Kontakt</a></li>
          </ul>
          <HamburgerMenu />
        </div>
      </div>


      {/* SECOND SECTION - HERO SECTION / ABOUT US */}
      <div id='kdoJsme'  className="aboutUs outerBox">
        <div className="innerBox">
          <h1>kavárna Stará škola</h1>
          <div className="oNas">
            <div className='carouselSection'>
              <CarouselGallery />
            </div>
            <div className="povidani">
              <p>Jsme smíchovská kavárna Stará škola sídlící v&nbsp;budově první obecné školy na&nbsp;Smíchově a&nbsp;zaměstnávající seniory, kteří nechtějí v&nbsp;důchodu sedět doma, ale baví je pracovat a&nbsp;být mezi lidmi. Jsme sociálním podnikem, a&nbsp;každým šálkem kávy tak podpoříte provoz center pro seniory. Připravujeme zde výběrovou kávu a&nbsp;pečeme si tu vlastní buchty, koláče nebo bábovky. No, budete se u&nbsp;nás cítit přesně jako u&nbsp;babičky. A&nbsp;to nejen díky zmiňovaným dobrotám, ale také příjemnému nostalgickému prostředí.</p>
            </div>
          </div>
          <svg width="300%" height="200px" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,200" fill="rgb(20,59,83)" />
            <polygon points="100,0 100,200 0,200" fill="#f4dcdc" />
          </svg>
        </div>
      </div>



    </div>
  )
}

export default App
