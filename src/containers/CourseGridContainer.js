import React from 'react'
import CourseService from '../services/CourseService'
import CourseCardComponent from '../components/CourseCardComponent'

export default class CourseGridContainer extends React.Component {
        constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance()
        this.state = {
            courses:[],
            edit: false
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

    updateCourse = course => 
        this.courseService.updateCourse(course).then(() =>this.findAllCourses());    

    editing=()=>
        this.setState({edit: !this.state.edit})

    render() {
        return (
            <div className="card-deck">
                    {this.state.courses.map((course, key) =>
                        <CourseCardComponent course={course} key={key} delet={this.deleteCourse}
                            update={this.updateCourse} edit={this.state.edit} editing={this.editing}/>
                    )}

                    <button className="btn btn-block btn-danger" onClick={()=>this.createCourse()} >
                        Add
                    </button>
            </div>
        )
    }
}