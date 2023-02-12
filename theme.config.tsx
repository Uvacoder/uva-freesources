import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
      <img src="img/favicon.ico" style={{ display: "inline-block", width: "28px"}}></img>
      <h5 style={{ marginLeft: "8px"}}><b>FreeSources</b></h5>
    </div>
  ),
  project: {
    link: 'https://freesources.vercel.app',
  },
  docsRepositoryBase: 'https://github.com/uvacoder/uva-freesources-4303',
  head: (
    <>
      <title>FreeSources</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FreeSources" />
      <meta property="og:description" content="For your design and development references." />
      <meta property="og:locale" content="en_GB"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://reeodev.github.io/img/reelogo.ico"/>
      <meta property="og:image:alt" content="Studio logo"/>

      <link rel="mask-icon" href="img/favicon.ico" color="#5bbad5"></link>
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico"></link>

      <meta property="og:url" content="https://reeodev.github.io/"></meta>
    </>
  ),
  footer: {
    text: 'FreeSources',
  },
  editLink: {
    text : null
  },
  feedback: {
    content: null
  },
  sidebar: {
    defaultMenuCollapseLevel: Infinity,
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'About') {
        return <>❓ {title}</>;
      }
      return <>👉 {title}</>;
    },
  },
  primaryHue: { dark: 68, light: 200 }
}

export default config
