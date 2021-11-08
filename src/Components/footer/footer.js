import React from 'react';
import Player from '../logo/video.svg';
import Group from '../logo/Group.svg';
import Icons from '../logo/Icons.svg'
import logo  from '../logo/logo.svg'
import Corona from '../logo/Corona.svg'
import List from '../logo/list.svg'
import Plaknot from '../logo/plaknot.svg';
import Logo from '../logo/Vector.svg';
import './footer.css';
import Blocks from '../blocks/blocks';
import Four from '../logo/four.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                 <div className="footer__content1">
                     <div className="footer__text">
                         <h1 className="footer__title">ПРЕДЛАГАЕМ УДОБНЫЕ<br></br> УСЛОВИЯ ДЛЯ ДИЛЕРОВ</h1>
                         <p className="footer__subtitle">С нами более 500 партнёров</p>
                     </div>
                 </div>

                 <div className="footer__content2">
                   <div className="footer__logo">

                         <div>
                             <img className="footer__img"  src={Player}  alt={Player}/>
                             
                              <p className="footer__tele">Телеграм канал, где мы<br></br>
                                       делимся опытом (новые изделия,<br></br>
                                        акции, обучающий контент)</p>
                         </div>
                              
                         <div>
                            <img  className="footer__img"  src={Group}  alt={Group}/>
                            <p className="footer__tele">Профессиональные<br></br>
                            менеджеры и электронный<br></br>
                            документооборот</p>
                         </div>
                            
                         <div>
                             <img  className="footer__img" src={Icons}  alt={Icons}/>
                             <p className="footer__tele">Предоставляем контент<br></br>
                                для интернет-магазинов<br></br>
                               (фото, рендеры)</p>
                         </div>
                             
                         <div>
                            <img className="footer__img" src={logo}  alt={logo}/>
                            <p className="footer__tele">Собственные каталоги<br></br>
                               для каждого типа изделия</p>
                         </div>

                     </div>

                     <form className="footer__form">
                             <input type="text" className='footer__input'  placeholder="телефон"/>
                              <button className="footer__btn" type='submit'>Стать дилером</button>
                         </form>


                    <div className="footer__design">
                        <h1 className="footer__title">А ТАКЖЕ ДЛЯ ДИЗАЙН СТУДИЙ</h1>

                        <div className="footer__box">

                             <div className="footer__block">
                                 <div className="footer__mini-block">
                                     <p className="footer__icons">Регулярное добавление новинок</p>
                                     <img  className="footer__group"  src={Corona}  alt={Corona}/>
                                 </div>
                             </div>

                             <div className="footer__block">
                                <div className="footer__mini-block">
                                   <p className="footer__icons">Эксклюзивные решения</p>
                                     <img className="footer__group"  src={Plaknot}  alt={Plaknot}/>
                                 </div>
                             </div>

                             <div className="footer__block">
                                <div className="footer__mini-block">
                                    <p className="footer__icons">Современные каталоги</p>
                                     <img className="footer__group"  src={List}  alt={List}/>
                                 </div>

                             </div>

                        </div>

                        <div className="footer__studio">
                                 <a href="#" className="footer__subtitle">Условия для дизайн студий</a>
                                      <img  src={Logo}  alt={Logo}/>
                        </div>
                      
                    </div>

                    <Blocks/>
                 </div>

                 
            </div>

            <div className="footer__bottom">
                  
                    <div className="footer__1">
                             <div className="footer__text1">
                                  
                                  <a className='footer__p'>Римские шторы</a><br></br>
                                  <a className='footer__p'>Австрийские шторы</a><br></br>
                                  <a className='footer__p'>Французские шторы</a><br></br>
                                  <h1 className="footer__title1">CORTIN</h1>
                            </div>

                            <div className="footer__text1">
                                  <a className='footer__p'>Прямые шторы</a><br></br>
                                  <a className='footer__p'>Лондонские шторы</a><br></br>
                            </div>
                           
                     </div>
                    
                     <div className="footer__2">

                       <div className="footer__text2">
                                  
                                  <a className='footer__p'>Дилерам</a><br></br>
                                  <a className='footer__p'>Дизайн студиям</a><br></br>
                                  <a className='footer__p'>Контакты</a><br></br>
                               
                            </div>

                            <div className="footer__text2">
                                  <a className='footer__p'>Политика ОПД</a><br></br>
                                  <a className='footer__p'>Дизайн в студий Вилкина</a><br></br>
                            </div>
                     </div>

                     <div className="footer__3">
                         <div className="footer__text3">
                                  
                                    <a className='footer__p'>+8 (800) 555-45-75</a><br></br>
                                    <a className='footer__p'>Г.Севастополь, Фиолентовское шоссе 1/2</a><br></br>
                                    <div className="Icons"> 
                                        <img  className="Icon" src={Four}   alt={Four} />
                                   </div>
                               
                            </div>   
                     </div>
              
                
               </div>
           
    
        </footer>
    );
};

export default Footer;