import React from "react";
import   Avstrian  from '../img/curtis.jpg';
import   British from '../img/img.jpg';
import   Room from '../img/image.jpg';
import   Uup from '../img/up.jpg';
import    Icons from  '../logo/Vector.svg';
import Dillers from "../dillers/dillers";
import French  from "../img/img.jpg";
import './basic.css';
import Studio from "../studio/studio";
import Win from "../Win/win";
import Footer from "../footer/footer";

const Basic = () => {

 return (
    <main className="main">
                   <div className="container">
                          <div className="row">
                               <div className="main__box">

                                        <div className="main__div1">

                                                <div className="main__text">  
                                                        <div className="main__just">   
                                                            <div className="main__glovo">
                                                                 <h1 className="main__title">ИНДВИДУАЛЬНОЕ<br></br>   ИЗГОТОВЛЕНИЕ ШТОР</h1>
                                                                  <p className="main__subtitle">8 видов систем, более 1000 видов тканей, <br></br>
                                                                 и множество дополнительных возможностей позволяют создать <br></br>реально уникальную и уютную атмосферу в вашем доме</p>
                                                            </div>

                                                            <div className="main__avstri  img">
                                                                <div className="main__icons">
                                                                     <p className="main__minititle">австрийские шторы</p>
                                                                     <img src={Icons}  alt={Icons} />
                                                                </div>
                                                                <img className="main__1img"  src={Avstrian} alt={Avstrian} /></div>
                                                            </div>
                                                         
                                                             </div>
                                             
                                    

                                           <div className="main__british img">
                                              <div className="main__icons"> 
                                                     <p className="main__minititle">лондонские шторы</p>
                                                     <img src={Icons}  alt={Icons} />
                                              </div>
                                                   <img  className="main__img"   src={British}   alt={British}/>
                                           </div>

                                        </div>

                                        <div className="main__2 ">
                                              <div className="main__img1">
                                                 <div className="main__icons">
                                                      <p className="main__minititle">римские шторы</p>
                                                      <img src={Icons}  alt={Icons} />
                                                 </div>
                                                      <img  className="main__img"   src={Room}   alt={Room}/>    
                                              </div>

                                              <div className="main__img2   img">
                                                    <div className="main__icons">
                                                        <p className="main__minititle">французские шторы</p>
                                                         <img src={Icons}  alt={Icons} />
                                                    </div>
                                                     <img   className="main__img"  src={French}  alt={French}/>    
                                              </div>


                                              <div className="main__img2   img">
                                                    <div className="main__icons">
                                                        <p className="main__minititle">  прямые шторы</p>
                                                         <img src={Icons}  alt={Icons} />
                                                    </div>
                                                     <img   className="main__img"  src={Uup}  alt={Uup}/>    
                                              </div>
                                                     
                                        </div>

                               </div>
                           </div>
                   </div>
                   <Dillers/>
                   <Studio/>
                   <Win/>
                   <Footer/>
    </main>
 )
};

export default Basic;