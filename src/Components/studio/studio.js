import React from "react";
import    First from '../logo/Corona.svg';
import    Plaknot from '../logo/plaknot.svg';
import    Win from '../logo/list.svg';
import    Vector from '../logo/Vector.svg';
import './studio.css';


const Studio = () => {
 return (
           <main__3>
                       <div className="container">
                               <div className="main__3-blocks">
                                           <h1 className="main__3-title">А ТАКЖЕ ДЛЯ ДИЗАЙН СТУДИЙ</h1>
                                           <div className="main__3-box">

                                                     <div className="main__3-item">
                                                               <div className="main__3-icons">
                                                                            <p className="main__3-subtitle">Регулярное<br></br> добавление <br></br>  новинок</p>
                                                                        <img className="main__3-img"  src={Plaknot}    alt={Plaknot}/>          
                                                               </div>
                                                     </div>

                                                     <div className="main__3-item">
                                                                  <div className="main__3-icons">
                                                                             <p className="main__3-subtitle">Эксклюзивные <br></br>  решения</p>
                                                                            <img  className="main__3-img"  src={Win}    alt={Win}/> 
     
                                                                  </div>
                                                     </div>

                                                     <div className="main__3-item">
                                                                <div className="main__3-icons">
                                                                <p className="main__3-subtitle">Современные <br></br>  каталоги</p>
                                                                    <img  className="main__3-img" src={First}    alt={First}/>
                                                                </div>
                                                        </div>
                                                  
                                           </div>

                                           <div className='main__3-footer'>
                                                                 <p className="main__3-text">Условия для дизайн студий</p>
                                                                 <img  className="main__3-img" src={Vector}    alt={Vector}/> 
                                                                 
                                     </div>

                               </div>
                       </div>
           </main__3>
 )
};

export default  Studio;