import React, { useState, useEffect } from 'react';
import data from "./locales/en.json"

export function HeaderLoader() {
  console.log(data)

  return (
    <div>
      <p>{data.header.home}</p>
      <p>{data.header.projects}</p>
      <p>{data.header.about}</p>
      <p>{data.header.contacts}</p>
    </div>
  );
}
