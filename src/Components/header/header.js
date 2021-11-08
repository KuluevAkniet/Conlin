import React from 'react';
import './header.css';
// import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <header className="header">
                  <div className="container">
                  <nav className="header__nav">
                        <h1 className="header__title">CORTIN</h1>
                      <div className="header__menu">
                      <button className="header__btn">Шторы Cortin</button>
                           {/* <Link> <li className="header__item">Где купить?</li></Link>
                            <Link> <li className="header__item">Дилерам</li></Link>
                            <Link>   <li className="header__item">Дизайн студиям</li> </Link>
                            <Link> <li className="header__item">Контакты</li> </Link> */}
                        
                      
                       </div>

            
                  </nav>
                  </div>
              </header>
        </div>
    );
};

export default Header;