import { Component } from 'react'

import Row from './row'
import Head from './head'
import Col from './col'
import Edit from './edit'

class Table extends Component {
  editN = evt => {
    const n = prompt('Enter the number of prime to generate:', 3)
    this.props.regeneratePrimes(n)
    evt.preventDefault()
  }
  render() {
    return (
      <table cellSpacing="0">
        <tbody>
          <Row>
            <Head>
              <Edit edit={this.editN} />
            </Head>
            {this.props.primes.map((x, idx) => (
              <Head key={`prime_row_${idx}`}>{x}</Head>
            ))}
          </Row>
          {this.props.primes.map((x, idx) => (
            <Row key={`prime_col_${idx}`}>
              <Head>{x}</Head>
              {this.props.primes.map((y, index) => (
                <Col key={`prime_res_${idx}_${index}`}>{x * y}</Col>
              ))}
            </Row>
          ))}
        </tbody>
        <style jsx>{`
          table {
            margin: 0;
            padding: 0;
            color: #232323;
          }
        `}</style>
      </table>
    )
  }
}

export default Table
