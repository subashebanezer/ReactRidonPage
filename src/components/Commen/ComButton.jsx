
const ComButton = (props) => {
  return (
    <>
      <button className="btn btn-danger rounded-pill mt-4 " type="button" style={props.padding}>{props.content} </button>
    </>
  )
}

export default ComButton
