export default props => (
  <td>
    {props.children}
    <style jsx>{`
      td {
        min-width: 15px;
        margin: 0;
        padding: 5px;
        text-align: center;
        border-right: 1px solid #232323;

        border-bottom: 1px solid #232323;
      }
      td:nth-child(even) {
        background-color: #f1f1f1;
      }
    `}</style>
  </td>
)
