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
            <li><a href='#menuLink'>Nabídka</a></li>
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


      {/* THIRD SECTION - NABÍDKA */}
      <div id='menuLink' className="nabidka outerBox">
        <div className="innerBox">
          <h2>Nabídka</h2>

          <div className="nabidkaGrid">

            <div className="kava menu">
              <h3>Káva</h3>
              <div className='columns'>
                <div className="leftColumn">
                  <ul>
                    <li>espresso/lungo</li>
                    <li>double espresso</li>
                    <li>capuccino</li>
                    <li>cafe latte</li>
                    <li>flat white</li>
                    <li>filtrovaná káva</li>
                    <li>vídeňská káva</li>
                    <li>alžírská káva</li>
                    <li>turecká káva</li>
                  </ul>
                </div>
                <div className="rightColumn">
                  <ul>
                    <li>50 Kč</li>
                    <li>65 Kč</li>
                    <li>65 Kč</li>
                    <li>75 Kč</li>
                    <li>75 Kč</li>
                    <li>65 Kč</li>
                    <li>70 Kč</li>
                    <li>75 Kč</li>
                    <li>50 Kč</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="caj menu">
              <h3>Horké nápoje</h3>
              <div className='columns'>
                <div className="leftColumn">
                  <ul>
                    <li>čerstvý mátový čaj</li>
                    <li>čerstvý zázvorový čaj</li>
                    <li>sáčkový čaj</li>
                    <li>kakao</li>
                  </ul>
                </div>
                <div className="rightColumn">
                  <ul>
                    <li>60 Kč</li>
                    <li>60 Kč</li>
                    <li>50 Kč</li>
                    <li>55 Kč</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="jidlo menu">
              <h3>K zakousnutí</h3>
              <p>Každý den pečeme nové dobroty.</p>
            </div>

            <div className="limonady menu">
              <h3>Studené nápoje</h3>
              <div className='columns'>
                <div className="leftColumn">
                  <ul>
                    <li>domácí limonáda</li>
                    <li>sodovka 0,1 l</li>
                    <li>mošt 0,1 l</li>
                    <li>bílé víno 0,1 l</li>
                    <li>červené víno 0,1 l</li>
                  </ul>
                </div>
                <div className="rightColumn">
                  <ul>
                    <li>65 Kč</li>
                    <li>7 Kč</li>
                    <li>15 Kč</li>
                    <li>30 Kč</li>
                    <li>30 Kč</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>



    </div>
  )
}

export default App
