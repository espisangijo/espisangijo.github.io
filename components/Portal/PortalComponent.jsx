// @ts-nocheck
import React from 'react';
import { Entity } from 'aframe-react';
export default function Portal({
    title,
    url,
    portalImg,
    portalObj,
}) {
  return (

      <Entity 
        position="5 1.2 5"
        portal={`title: ${title}; url: ${url}; portalImg: ${portalImg}; portalObj: ${portalObj}`}
        id="portal-component"
      />

  );
}