import React from 'react';
import  Shtor   from '../img/Yellow.png';
import First from '../logo/ic/first.svg';
import Second from '../logo/ic/second.svg';
import Treeth from '../logo/ic/treeth.svg';
import Four from '../logo/ic/Fourth.svg';
import I1 from '../img/i1.png';
import  I2 from '../img/i2.png';
import I3  from '../img/i3.png';
import SH from '../img/SH.svg';
import S from '../img/S.svg';
import Img79  from '../img/79.jpg';
import Img80  from '../img/80.jpg';
import Style  from '../img/O.jpg';
import Day  from '../img/Day.jpg';
import DayI from '../logo/SS.svg';
import Cornice from '../img/cornise.jpg';
import Ima   from '..//img/Ima.jpg';
import M   from '..//img/M.jpg';
import Pult from '../img/pult.jpg';
import Str from '../logo/pult.svg';
import  Text  from '../img/SH.jpg';
import H from '../img/text.jpg';
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


                      <div className="option">
                           <div className="option__box">
                                <div className="option__text">
                                                             <h1 className="option__title">ВЫБИРАЙ ОПЦИИ</h1>
                                                             <p className="option__subtitle">Мы оринетруемся на эксклюзивные изделия.<br></br> 
Вы фактически сами собираете штору под свой интерьер</p>
                                                   </div>

                                                   <div className="option__carn">
                                                          <div className="option__t">
                                                                <h1 className="title">КАРНИЗЫ <br></br>
С ВЕРЁВОЧНЫМ <br></br>
УПРАВЛЕНИЕМ</h1>
                                                               <p className="subtitle">Тихий и экономичный вариант, <br></br>
для проёмов до 3 метров</p>

                                                          </div>

                                                          <div className="option__img">
                                                                   <img src={SH}  alt={SH} />
                                                                   <img src={S}  alt={S} />
                                                          </div>
                                                   </div>
                                  </div>
                           </div>

                           <div className="room">
                                   <div className="room__box">

                                            <div className="room__img1">
                                                   <p className="room__subtitle">Кассетные<br></br>
римские шторы</p>
                                                  <img  className="room__ig" src={Img79}   alt={Img79}/>
                                            </div>

                                            <div className="room__img2">
                                                  <img className="room__i" src={Img80}   alt={Img80}/>    
                                                  <p className="room__subtitle"> Карниз <br></br>
на кронштейны </p>
                                            </div>

                                            <div className="room__text">
                                                            <h1 className="room__title">КАРНИЗЫ <br></br>
                                                            С ЦЕПОЧНЫМ <br></br>
                                                            УПРАВЛЕНИЕМ</h1>

                                                           <ul className="room__ul">
                                                                    <li className="room__li">Удобная и прочная<br></br>
металлическая цепочка</li>
                                                                    <li className="room__li">Устанавливается на окно<br></br>
и штора не провисает при
открывании створки</li>
                                                           </ul>
                                                         
                                            </div>
                    
                                   </div>
                           </div>

                           <div className="style">
                                  <div className="container">
                                         <div className="style__box">
                                           <div className="style__block1">

                                                    <div >

                                                           <h1 className="style__title">ОКАНТОВКА</h1>
                                                           <p className="style__subtitle">С восьмью вариантами исполнения</p>

                                                    </div>

                                                    <div className="style__img">
                                                 
                                                               <img src={Style}  alt={Style}/>
                                                               <img src={Style}  alt={Style}/>
                                                               <img src={Style}  alt={Style}/>
                                                   
                                                            
                                                    </div>
                                           </div>

                                           <div className="style__block2">
                                                   <img src={Style}  alt={Style}/>
                                                   <img src={Style}  alt={Style}/>
                                                   <img src={Style}  alt={Style}/>
                                                   <img src={Style}  alt={Style}/>
                                                   <img src={Style}  alt={Style}/>
                                                </div>
                                  </div>
                                  </div>
                           </div>

                           <div className="day">
                                  <div className="day__style">
                                       <div className="day__img">
                                           <img src={Day}   alt={Day}/>
                                       </div>
                                            <div className='Day__text'>
                                                    <img src={DayI}     alt={DayI}/>
                                                    <h1 className="Day__title">ДЕНЬ<span className="Day__span">-НОЧЬ</span></h1>
                                                    <p className="Day__subtitle">Римская штора день-ночь длинной до трёх метров 
                                                    с двуммя механизмами управления основной шторой и полупрозрачной тюлью. 
                                                    Управлять шторами отдельно, вне зависимости от выбранного карниза.
                                                     Универсальная конструкция, которую можно устанавить внутри оконного проема, 
                                                     на стену или крепить к потолку</p>
                                           </div>
                                       </div>
                           </div>

                           <div className="cornice">
                                    <div className="container">
                                             <div className="cornice__block">

                                                      <div className="cornice__box1">
                                                                 <img  src={Cornice}     alt={Cornice}/>
                                                                 <div className="cornice__text">
                                                                         <h1 className="cornice__title">ВЕРЁВОЧНЫЙ КАРНИЗ</h1>
                                                                         <p className="cornice__subtitle">С бесшумным и простым <br></br>
верёвочным управлением</p>
                                                                 </div>
                                                      </div>

                                                      <div className="cornice__box2">
                                                          <div className="cornice__text1">
                                                                         <h1 className="cornice__title">ВЕРЁВОЧНЫЙ КАРНИЗ</h1>
                                                                         <p className="cornice__subtitle">С бесшумным и простым <br></br>
верёвочным управлением</p>
                                                                 </div>
                                                              <img  className="cornice__i" src={Cornice}     alt={Cornice}/>
                                                      </div>

                                                      <div className="cornice__box3">
                                                                <img  src={Cornice}     alt={Cornice}/>
                                                                     <div className="cornice__text">
                                                                         <h1 className="cornice__title">ВЕРЁВОЧНЫЙ КАРНИЗ</h1>
                                                                         <p className="cornice__subtitle">С бесшумным и простым <br></br>
верёвочным управлением</p>
                                                                 </div>
                                                      </div>

                                             </div>
                                    </div>
                           </div>

                           <div className="image">
                                   <div className="image__box">
                                              <img src={Ima}  alt={Ima}/>
                                                 <div className='image__between'>
                                                         <div className="image__text"  >
                                                                <h1 className="image__title">НА ОКНО  СО СКОСОМ</h1>
                                                                <p className="image__subtitle">Два варианта решения:
фальштора, которая закроет
косую часть окна 
или специальный карниз</p>
                                                         </div>
                                                 </div>
                                              <img src={M}  alt={M}/>
                                   </div>
                           </div>


                           <div className="pult">
                                 <div className="container2">
                                   <div className="pult__box">
                                         <div className="pult__text">
                                                <h1 className="pult__title">АВТОМАТИКА</h1>
                                                <p className="pult__subtitle">Универсальная<br></br> система, для всех  подъёмных штор. <br></br><span  className="sp">Управление
                                                                  с помощью пульта.</span> <br></br>В комплектацию также входит зарядное устройство</p>
                                         </div>

                                         <div className="pult__img">
                                                   <img src={Pult}   alt={Pult} />
                                         </div>
                                 </div>
                                 </div>
                           </div>


                           <div className="str">
                                <div className="container2">
                                       <div className="str__block">
                                                  <img  className="str__img"    src={Str}   alt={Str} />

                                                   <div className="str__text">
                                                          <h1 className="str__title">Карниз с тихим<br></br>
электромотором</h1>
                                                        <p className="str__subtitle">Работает без подзарядки более двух месяцев</p>
                                                   </div>
                                       </div>
                                </div>
                           </div>


                           <div className="potok">
                                   <div className="container">
                                          <div className="potok__box">
                                                   <div className="potok__text">
                                                             <h1 className="potok__title">ПОТОЧНОЕ<br></br>
ПРОИЗВОДСТВО</h1>
                                                              
                                                              <p className="potok__subtitle">Мы сами закупаем ткань напрямую<br></br>
от поставщика, имеем большое производство и склад, невысокую<br></br>
цену на ткань</p>                    
                                                              <img src={H}  alt={H}/>
                                                   </div>

                                                   <div className="potok__img">
                                                           <div className="potok__mini">
                                                                    
                                                           </div>
                                                   </div>
                                          </div>
                                   </div>
                           </div>
                              
             </section>
    );
};

export default Rom;