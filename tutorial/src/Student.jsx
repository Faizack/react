import Comp from './Comp'
import PropTypes from 'prop-types'
const Student = (props) => {
  return (

    <div className="student">
            <p>name     :{ props.name } </p>
            <p>age      :{props.age} </p>
            <p> gender  :{props.gender} </p>

            <Comp name ={props.name}/>

         
    </div>
  )
}

Student.prototype ={
    name : PropTypes.string,
    age : PropTypes.number,
    gender : PropTypes.string
}

Student.defaultProps ={
    name : "name",
    age : 0,
    gender : "gender"
}
export default Student