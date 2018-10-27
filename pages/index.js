import Head from 'next/head'
import { Component } from 'react'

import { generatePrime } from '../src/utils'
import Table from '../src/components/table'

class App extends Component {
  state = {
    primes: generatePrime(100),
  }

  regeneratePrimes = n => {
    try {
      this.setState({
        primes: generatePrime(parseInt(n)),
      })
    } catch (e) {
      alert(e.message)
    }
  }

  render() {
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
        <Table primes={this.state.primes} regeneratePrimes={this.regeneratePrimes} />
      </div>
    )
  }
}

export default () => <App />
