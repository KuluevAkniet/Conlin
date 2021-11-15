import React  from 'react';
import Icons from '../logo/Icons.svg';
import Group from '../logo/Group.svg';
import List  from '../logo/video.svg';
import Vector from '../logo/logo.svg';
import './dillers.css';

const Dillers = () => {
 return (

     < div className="container">
                <div className="box" >
                       <div className="box__text">
                                   <h1 className="box__title">ПРЕДЛАГАЕМ УДОБНЫЕ <br></br> УСЛОВИЯ ДЛЯ ДИЛЕРОВ</h1>
                                   <p className="box__subtitle">С нами более 500 партнёров</p>
                       </div>

                       <div className="box__img">

                                   <div className="box__icons">
                                             <img className="box__image" src={Icons}     alt={Icons}  />
                                              <p className="box__subtitle">Телеграм канал, где мы<br></br>
                                                                   делимся опытом (новые изделия,<br></br>
                                                                             акции, обучающий контент)</p>
                                   </div>

                                   <div className="box__icons">
                                            <img className="box__image"  src={Group}     alt={Group}  />
                                             <p className="box__subtitle">Профессиональные <br></br>
менеджеры и электронный <br></br>
документооборот</p>
                                   </div>

                                   <div className="box__icons">
                                             <img className="box__image"  src={List}     alt={List}  />
                                             <p className="box__subtitle">Предоставляем контент<br></br>
для интернет-магазинов<br></br>
(фото, рендеры)</p>
                                   </div>

                                   <div className="box__icons">
                                   <img className="box__image"  src={Vector}     alt={Vector}  />
                                   <p className="box__subtitle">Собственные каталоги<br></br>
для каждого типа изделия</p>
                                   </div>

                       </div>
                       <div className="box__d">
                                 <input className="box__input"  type="tel"   placeholder="телефон"></input>
                            <button className="box__btn">Стать диллеров</button>
                       </div>
                </div>
      </div>
 )
};

export default Dillers;