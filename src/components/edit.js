export default props => (
  <span onClick={props.edit}>
    ✎
    <style jsx>{`
      span {
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    `}</style>
  </span>
)
