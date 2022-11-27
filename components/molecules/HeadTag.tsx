import React from 'react'
import Head from 'next/head'

interface HeadTagProps {
    title?: string,
}

export default function HeadTag({title}:HeadTagProps)
{
  return(
    <Head>
      <title>Reuni - SMALB@</title>
      <meta name="keywords" content="Website Reuni" />
      <meta name="author" content="Hitechra Dev aKa Pixel Dev - Muhammad Ma'sum" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/images/htchr.png" />
    </Head>
  )
}