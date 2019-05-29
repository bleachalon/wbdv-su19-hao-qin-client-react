import React from 'react'
import CourseService from '../services/CourseService'
import CourseRowComponent from '../components/CourseRowComponent';

export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }

    deleteCourse = courseId =>
    this.setState({
        courses: this.state.courses.filter(course => course.id !== courseId)
    })

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th className="d-none d-md-table-cell" scope="col">Modified date</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.state.courses.map((course, key) =>
                    <CourseRowComponent course={course} key={key} delet={this.deleteCourse}/>
                )}

                </tbody>
            </table>
        )
    }
}