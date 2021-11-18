import React from 'react';
import  Shtor   from '../img/Yellow.png';
import First from '../logo/ic/first.svg';
import Second from '../logo/ic/second.svg';
import Treeth from '../logo/ic/treeth.svg';
import Four from '../logo/ic/Fourth.svg';
import I1 from '../img/i1.png';
import  I2 from '../img/i2.png';
import I3  from '../img/i3.png';
import './Rom.css';

const Rom = () => {
    return (
             <section className="section__1">
                      <div className="container">

                                  <div className="section__Room">

                                           <div className="section__text">
                                                  <h1 className="section__title">Римские шторы</h1>
                                                   <p className="section__subtitle">Изготавливаем римские шторы<br></br>
с учётом всех ваших пожеланий</p>

                                                  <div className="section__btns">
                                                       <button className="section__btn1"> Хочу заказать</button>
                                                        <button className="section__btn2"> Хочу стать дилером</button>
                                                    </div>

                                                    <div className="section__ic">

                                                    <div className="section__div">
                                                    <img  className="section__ig" src ={First}     alt={First}/> 
                                                         <p className="section__te">День-ночь</p>
                                                    </div>

                                                    <div className="section__te">
                                                    <img className="section__ig"  src ={Second}     alt={Second}/>
                                                         <p className="section__te">C автоматикой</p>
                                                    </div>

                                                      <div className="section__te">
                                                           <img className="section__ig"  src ={Treeth}     alt={Treeth}/> 
                                                           <p className="section__te">С окантовкой</p>
                                                      </div>
                                                 
                                                       
                                                         <div className="section__te">
                                                              <img className="section__ig" src ={Four}     alt={Four}/>
                                                              <p className="section__te">На косое окно</p>
                                                         </div>
                                                   
                                                    </div>
                                           </div>

                                           <div className="section__img">
                                                   <img src ={Shtor}     alt={Shtor}/>
                                           </div>

                                  </div>

                                  <div className='section__shtor'>

                                             <div className="section__1">

                                                          <div className="section__into">
                                                                     <img src={I1}   alt={I1}/>
                                                                     <p className="section__is">НА ОКНО</p>
                                                          </div>

                                                          <div className="section__u">
                                                                             
                                                                    <img src={I3}   alt={I3}/> 
                                                                    <p className="section__is">НА СТЕНУ,<br></br>НА ПРОЁМ</p>
                                                               
                                                          
                                                             </div>

                                             </div>

                                             <div className="section__t">
                                             <img src={I2}   alt={I2}/>
                                                <p className="section__is">НА  ПРОЁМ</p>
                                                  </div>

                                  </div>
                      </div>
             </section>
    );
};

export default Rom;