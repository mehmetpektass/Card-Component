import propTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            Is He Student: {props.isStudent ? <p className='isStudent-true'>{props.name} is a student</p> :
                                                 <p className='isStudent-false'>{props.name} is NOT a student</p>  }
                                                 
        </div>
    );
}
Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
Student.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student