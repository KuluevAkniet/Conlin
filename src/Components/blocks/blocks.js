import React from 'react';
import Black from '../logo/logo_black.svg';
import Win from '../logo/win.svg';
import Winn from '../logo/winn.svg';
import './blocks.css';

const Blocks = () => {
    return (
      
        <div className="footer__buy">

        <div className="footer__container">
    
   <div className="footer__left">
    <h1 className="footer__rek">КУПИТЬ НАШИ<br></br> ИЗДЕЛИЯ МОЖНО</h1>
    <p className="footer__store">В магазинах нашей дилерской<br></br> сети в вашем городе</p>

    <div className="block__btn">
       <button className="footer__btn2">Найти магазин</button> 
    </div>
   
</div>

<div className="footer__boxx">
    <div className="footer__box1">
        <div className="footer__mini">
            <div className="footer__hp">

             <img src={Black}  alt={Black}/>
               <p className="footer__sign">Солнцезащитные <br></br> системы</p> 

             </div>
        
        </div>
        
    </div>
    <div className="footer__box2">

      <div className="footer__bo">
           <img  className="win" src={Win}  alt={Win}/>
           <p className="footer__sign2">Интернет-магазин<br></br>
           жалюзи рулонных штор</p> 
    </div>
     
    </div>

 </div>
 
 
</div>

<div className="footer__ou">
    <div className="footer__few">
        <div className="footer__cell">
            <img className='winn' src={Winn}  alt={Winn}/>
        </div>
        <div className="footer__cell">
            <img  className='winn' src={Winn}  alt={Winn}/>
        </div>
        <div className="footer__cell">
           <img  className='winn' src={Winn}  alt={Winn}/>
        </div>
    </div>
</div>
<div className="footer__winnn">

  <div className="footer__cel">
   
   </div>

    <div className="footer__cell2">
        <img  className='winn2' src={Winn}  alt={Winn}/>
    </div>

    <div className="footer__cel">
   
   </div>
    </div>
</div>
       
    );
};

export default Blocks;