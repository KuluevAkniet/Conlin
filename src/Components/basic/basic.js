import React from 'react';
import Image from '../img/image.jpg';
import Image2 from '../img/Rectangle.jpg';
import Image3 from '../img/img.jpg';
import Image4 from '../img/curtis.jpg';
import Image5 from '../img/up.jpg';
import Logo from '../logo/Vector.svg';
import Footer from '../footer/footer';
import './basic.css'

const Basic = () => {
    return (
        <main className="main">
             <div className="container">
                 <div className="main__content">
                       <div className="main__curtains1">
                         <div className="main__text">
                           <h1 className="main__title">ИНДВИДУАЛЬНОЕ<br></br>
                                                     ИЗГОТОВЛЕНИЕ ШТОР</h1>
                           <p className="main__subtitle">8 видов систем, более 1000 видов тканей,<br></br> 
                                  и множество дополнительных возможностей позволяют создать<br></br> реально уникальную и уютную атмосферу в вашем доме</p>

                                  <div className="main__img2">
                                    <div className="main__str">
                                        <h1 className="main__rim">австрийские шторы</h1> 
                                        <img className="main__icons" src={Logo}  alt={Logo}/>  
                                    </div>  
                                    <img  src={Image2}  alt={Image2}/> 
                                  </div>

                                  <div className="main__img2">
                                    <div className="main__str">
                                        <h1 className="main__rim">лондонские шторы</h1> 
                                        <img className="main__icons" src={Logo}  alt={Logo}/>  
                                    </div>  
                                    <img  src={Image4}  alt={Image4}/> 
                                  </div>
                                   
                       </div>

                       <div className="main__image">
                           <div className="main__img">
                              <img src={Image} alt={Image}/> 
                           </div>
                            <div className='main__str'>
                               <h1 className="main__rim">римские шторы</h1> 
                                 <img className="main__icons" src={Logo}  alt={Logo}/>
                            </div>

                            <div className="main__img3">
                                <img src={Image3}  alt={Image3}/>
                                <div className='main__str'>
                               <h1 className="main__rim">французские шторы</h1> 
                                 <img className="main__icons" src={Logo}  alt={Logo}/>
                            </div>
                            </div>

                            <div className="main__img3">
                                <img src={Image5}  alt={Image5}/>
                                <div className='main__str'>
                               <h1 className="main__rim">прямые шторы</h1> 
                                 <img className="main__icons" src={Logo}  alt={Logo}/>
                            </div>
                            </div>
                       </div>


                 </div>
               </div>
                  

             </div>
             <Footer/>
        </main>
    );
};

export default Basic;