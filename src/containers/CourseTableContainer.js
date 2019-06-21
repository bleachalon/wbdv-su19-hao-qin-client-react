import React from 'react'
import CourseService from '../services/CourseService'
import CourseRowComponent from '../components/CourseRowComponent';

export default class CourseListContainer extends React.Component {
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
                title: 'New Course',
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
            <div>
                 <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th className="d-none d-md-table-cell" scope="col">Modified date</th>
                    <th scope="col">Edit/Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.state.courses.map((course, key) =>
                    <CourseRowComponent course={course} key={key} delet={this.deleteCourse} 
                        update={this.updateCourse} edit={this.state.edit} editing={this.editing} />
                )}

                </tbody>
            </table> 

                    <button className="btn btn-block btn-danger" onClick={()=>this.createCourse()} >
                        Add
                    </button>

            </div>

        )
    }
}