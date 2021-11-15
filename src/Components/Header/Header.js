import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div >
                     <header className="header">
                            <div className="container">
                           <nav className="header__nav">
                            <h1 className="header__title">CORTIN</h1>
                               <ul className="header__menu">
                                        <Link to="/"  className="header__Link" ><button className="header__btn">Шторы Cortin</button></Link>
                                         <Link to="" className="header__Link"><li className="header__item">Где купить ?</li></Link>
                                         <Link to="" className="header__Link">  <li className="header__item">Дилерам</li> </Link>
                                         <Link to="" className="header__Link"><li className="header__item">Дизайн студиям</li></Link>
                                         <Link to="" className="header__Link"><li className="header__item">Контакты</li></Link>
                                   </ul>
                           </nav>
                           </div>
                     </header>
        </div>
    );
};

export default Header;