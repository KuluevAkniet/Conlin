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
           
    );
};

export default Footer;