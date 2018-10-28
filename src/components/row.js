export default props => (
  <tr {...props}>
    {props.children}
    <style jsx>{`
      tr {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </tr>
)
