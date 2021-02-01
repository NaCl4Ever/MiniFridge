
import React from 'react'
import { Header } from '../common/header/header.component';
import Head from 'next/head';
import dynamic from "next/dynamic";


export default function Home() {

  const DynamicComponentWithNoSSR = dynamic(() => import('../common/map/map.component').then((mod) => mod.Map), {
    ssr: false
  });
  
  return (
   <React.Fragment>
      <Header/>
      <Head>
      <link
  href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
  rel="stylesheet"
/>
      </Head>
      <DynamicComponentWithNoSSR/>
   </React.Fragment>
  )
}
