
import React from 'react'
import { Header } from '../common/header/header.component';
import Head from 'next/head';
import dynamic from "next/dynamic";

export default function Home() {

  const DynamicComponentWithNoSSR = dynamic(() => import('../common/leaflet/leaf.component').then((mod) => mod.Map), {
    ssr: false
  });
  
  return (
   <React.Fragment>
     <Head>
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossOrigin=""
   />
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossOrigin=""/>
     </Head>
      <Header/>
     <DynamicComponentWithNoSSR/>
   </React.Fragment>
  )
}
