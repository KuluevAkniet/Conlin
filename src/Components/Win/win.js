import React from "react";
import  Wi from '../logo/logo_black.svg'
import  Deco from '../logo/win.svg';
import  Wu   from '../logo/winn.svg';
import  './win.css';


const Win  = () => {
 return (
         <main className="main__4">
                <div className="container">
                        <div className="main__4-box">

                                 <div className='main__4-item1'>
                                        <div>
                                        <h1 className="main__4-title">КУПИТЬ НАШИ <br></br>
ИЗДЕЛИЯ МОЖНО</h1>
                                           <p className='main__4-subtitle'>В магазинах нашей дилерской<br></br>
сети в вашем городе</p>
                                        </div>
                          

                                         <button className="main__4-btn">Найти магазин</button>
                                 </div>

                                 <div className='main__4-item2'>
                                          <div className="main__4-block1">

                                                   <div className="main__4-mini1">
                                                              <img  className='main__4-img' src={Wi}    alt={Wi} />
                                                              <p className="main4__title">Солнцезащитные<br></br>
системы</p>
                                                   </div>

                                                   <div className="main__4-mini2">
                                                           <img  className='main__4-img' src={Deco}    alt={Deco} />    
                                                           <p className="main4__2-title">Интернет-магазин<br></br>
жалюзт рулонных штор</p>
                                                   </div>

                                          </div>
                                                 <div className="main__4-mini3">
                                                       
                                                         <div className="main__4-item">
                                                                <img  className='main__4-imag' src={Wu}    alt={Wu}/>    
                                                         </div>

                                                         <div className="main__4-item">
                                                              <img  className='main__4-imag' src={Wu}    alt={Wu}/>    
                                                           </div>
                                                         <div className="main__4-item">
                                                                        <img  className='main__4-imag' src={ Wu}   alt={Wu} />    
                                                         </div>

                                                 </div>

                                                 <div className="main__4-items">
                                                             <img  className='main__4-imag' src={Wu}    alt={Wu} />    
                                                 </div>

                        </div>
                </div>
                </div>

         </main>
 )
};

export default Win;