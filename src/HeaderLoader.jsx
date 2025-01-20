import React from 'react';
import {Header} from "./components/Header/Header.jsx"
import data from "./locales/en.json"

export function HeaderLoader() {
  
  return( 
    <Header data={data.header} />
  );
}

console.log(data)


