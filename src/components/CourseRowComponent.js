import React from 'react'

const CourseRowComponent = ({course, delet, update, edit,editing}) =>
    <tr className="table-secondary">
        <td>
            <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}>{course.title}</a>
        </td>
        <td>{course.author}</td>
        <td className="d-none d-md-block">{course.date}</td>
        <td>
       {/* // <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}> */}
            <i className={`fa fa-pencil ${edit===false? "" : "d-none"}`} onClick= {()=>editing() } ></i>
            <input className= {`form-control ${edit===true? "" : "d-none"}`} onChange= {(e)=> update({...course, title: e.target.value})} defaultValue={course.title}></input>
            <i onClick= {()=>editing() } className= {`fa fa-check ${edit===true? "" : "d-none"}`}></i>
        {/* </a> */}
        <i onClick={() => {delet(course.id)}} className="fa fa-remove"></i>
        </td>
    </tr>

export default CourseRowComponent