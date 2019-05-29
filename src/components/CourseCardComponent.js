import React from 'react'
import './css/CourseCardStyle.css'

const CourseCardComponent = ({course, delet}) =>
    <div className="card mb-3" style={{'min-width': 15+ 'rem', 'max-width': 18 +'rem'}}>
    <img src="https://picsum.photos/200/200" className="card-img-top" alt="..."></img>
    <div className="card-body">
    <h5 className="card-title"> <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}>{course.title}</a></h5>
    <p className="card-text">{course.author}</p>
    <p className="card-text">{course.date}</p>
    <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}>
            <i className="fa fa-pencil"></i>
        </a>
        <i onClick={() => {delet(course.id)}} className="fa fa-remove"></i>
    </div>
    </div>
export default CourseCardComponent