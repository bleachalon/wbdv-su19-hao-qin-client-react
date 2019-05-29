import React from 'react'

const CourseRowComponent = ({course, delet}) =>
    <tr className="table-secondary">
        <td>
            <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}>{course.title}</a>
        </td>
        <td>{course.author}</td>
        <td className="d-none d-md-block">{course.date}</td>
        <td>
        <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}>
            <i className="fa fa-pencil"></i>
        </a>
        <i onClick={() => {delet(course.id)}} className="fa fa-remove"></i>
        </td>
    </tr>

export default CourseRowComponent