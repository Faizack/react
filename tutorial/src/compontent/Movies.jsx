
const Movies = (props) => {
  return (
    <div className="movie">
        <img src={props.poster} alt="" />
        <p id="title">{props.title}</p>
        <p id="year">Year: {props.year}</p>
    </div>
  )
}

export default Movies