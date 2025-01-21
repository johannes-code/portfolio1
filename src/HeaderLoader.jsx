import React from 'react';
import {Header} from "./components/Header/Header.jsx"
import { Hero } from './components/Hero/Hero.jsx';
import data from "./locales/en.json"


export function HeaderLoader() {
  
  return( 
    <Header data={data.header} />
  );
};

export function HeroLoader() {

  return(
    <Hero data={data.pages.home.hero} />
  );
}

console.log(data.pages.home.hero)


