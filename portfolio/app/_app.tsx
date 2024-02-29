import React from 'react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import NavBar from '@/components/NavBar'

type Props = {}

export default function _app({Component, pageProps, router }: AppProps) {
  return (
    <main>
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    </main>
  )
}