import React from 'react'
import CourseService from '../services/CourseService'
import CourseCardComponent from '../components/CourseCardComponent'

export default class CourseGridContainer extends React.Component {
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
            <div className="card-deck">
                    {this.state.courses.map((course, key) =>
                        <CourseCardComponent course={course} key={key} delet={this.deleteCourse}/>
                    )}
            </div>
        )
    }
}