import Head from 'next/head'

import { generatePrime } from '../src/utils'

const primes = generatePrime(100)
export default () => (
  <div>
    <Head>
      <title>Prime table</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <table cellspacing="0">
      <tbody>
        <tr>
          <th />
          {primes.map((x, idx) => (
            <th key={`prime_row_${idx}`}>{x}</th>
          ))}
        </tr>
        {primes.map((x, idx) => (
          <tr key={`prime_col_${idx}`}>
            <th>{x}</th>
            {primes.map((y, index) => (
              <td key={`prime_res_${idx}_${index}`}>{x * y}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      table {
        margin: 0;
        padding: 0;
        color: #232323;
      }
      tr {
        margin: 0;
        padding: 0;
      }
      th {
        font-weight: bold;
        min-width: 15px;
        margin: 0;
        padding: 5px;
        text-align: center;
        border-right: 1px solid #232323;
        border-bottom: 1px solid #232323;
      }
      td {
        min-width: 15px;
        margin: 0;
        padding: 5px;
        text-align: center;
        border-right: 1px solid #232323;

        border-bottom: 1px solid #232323;
      }

      td:nth-child(even),
      th:nth-child(even) {
        background-color: #f1f1f1;
      }
    `}</style>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
      }
    `}</style>
  </div>
)
