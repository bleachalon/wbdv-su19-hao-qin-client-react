import React from 'react'
import CourseService from '../services/CourseService'
import CourseCardComponent from '../components/CourseCardComponent'

export default class CourseGridContainer extends React.Component {
        constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance()
        this.state = {
            courses:[]
        }
    }
  
    componentDidMount = () =>
        this.findAllCourses();

    findAllCourses = () =>
        this.courseService.findAllCourses()
            .then(courses => 
            this.setState
            ({courses: courses}));

    createCourse = () =>
        this.courseService
            .createCourse({
                id: (new Date()).getTime(),
                title: 'New Course'
            })
            .then(() =>
            this.findAllCourses());
           
    deleteCourse = courseId =>
        this.courseService
                .deleteCourse(courseId)
                .then(() =>this.findAllCourses());


    render() {
        return (
            <div className="card-deck">
                    {this.state.courses.map((course, key) =>
                        <CourseCardComponent course={course} key={key} delet={this.deleteCourse}/>
                    )}

                    <button className="btn btn-block btn-danger" onClick={()=>this.createCourse()} >
                        Add
                    </button>
            </div>
        )
    }
}