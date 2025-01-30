import React, { useState, useEffect } from 'react';
import data from "./locales/en.json"

export function HeaderLoader() {
  
  return (
    <Header>
      <p>{data.header.home}</p>
      <p>{data.header.projects}</p>
      <p>{data.header.about}</p>
      <p>{data.header.contacts}</p>
    </Header>
  );
}


