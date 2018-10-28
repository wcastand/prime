import React, { useState } from 'react'
import Head from 'next/head'

import { generatePrime } from '../src/utils'
import Table from '../src/components/table'

export default function App() {
  const [primes, setPrimes] = useState(generatePrime(100))

  const regeneratePrimes = n => {
    try {
      const cleanNumber = parseInt(n)
      setPrimes(generatePrime(cleanNumber))
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div>
      <Head>
        <title>Prime table</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          line-height: 1.5;
          font-family: 'Arial', sans-serif;
        }
      `}</style>
      <Table primes={primes} regeneratePrimes={regeneratePrimes} />
    </div>
  )
}
