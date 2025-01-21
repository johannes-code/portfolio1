import React from 'react';
import logoImg from '/assets/images/logo.svg';


export function Hero (){

return(
<section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{hero.title}</h1>
                <div className="hero__description">{hero.description}</div>
                {/* <a className="button button__primary" href="#contacts">Contact ME =&gt;</a> */}
            </div>
            <div className="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" className="hero__logo"/>
                <img src="/images/hero.png" alt="Johannes" className="hero__image"/>
                <div className="hero__status">{hero.status}</div>
                
        <svg width="100%" className="dots" viewBox="0 0 104 104">
            <circle cx="4" cy="4" r="4"></circle><circle cx="4" cy="28" r="4"></circle><circle cx="4" cy="52" r="4"></circle><circle cx="4" cy="76" r="4"></circle><circle cx="4" cy="100" r="4"></circle><circle cx="28" cy="4" r="4"></circle><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="52" r="4"></circle><circle cx="28" cy="76" r="4"></circle><circle cx="28" cy="100" r="4"></circle><circle cx="52" cy="4" r="4"></circle><circle cx="52" cy="28" r="4"></circle><circle cx="52" cy="52" r="4"></circle><circle cx="52" cy="76" r="4"></circle><circle cx="52" cy="100" r="4"></circle><circle cx="76" cy="4" r="4"></circle><circle cx="76" cy="28" r="4"></circle><circle cx="76" cy="52" r="4"></circle><circle cx="76" cy="76" r="4"></circle><circle cx="76" cy="100" r="4"></circle><circle cx="100" cy="4" r="4"></circle><circle cx="100" cy="28" r="4"></circle><circle cx="100" cy="52" r="4"></circle><circle cx="100" cy="76" r="4"></circle><circle cx="100" cy="100" r="4"></circle>
        </svg>
    
            </div>
        </section>
)}