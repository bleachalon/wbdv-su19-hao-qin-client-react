import React from 'react'
import LessonTabComponent from '../components/LessonTabComponent'

export default class LessonTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            courseId: props.params.courseId,
            moduleId: props.params.moduleId,
            lessonId: props.params.lessonId,
            topicId: props.params.topicId,
            lessons: props.lessons,

            lesson : {
                id: '-2',
                title : 'New Lesson'
            }
        }
    }
  
    deleteLesson =(lessonId)=>
        this.setState({
            lessons: this.state.lessons.filter(lesson => lesson.id !== lessonId)
        })

    createLesson = () => {
        this.setState({
            lessons: [...this.state.lessons, this.state.lesson]
        })
    }

    titleChange = (event) => {
        this.setState({
            lesson: {
                title : event.target.value,
                id : (new Date()).getTime()
            }
        })
    }

    render() {
        return(
            <div>
                <ul className="nav nav-tabs">
                    <LessonTabComponent
                    deleteLesson={this.deleteLesson}
                    params={this.props.params}
                    lessons={this.state.lessons}/>
                <li>
                    <div className="input-group mb-3">
                        <input onChange= {this.titleChange} className="form-control" type="text" value={this.state.lesson.title}></input>
                        <div className="input-group-append">
                            <button onClick={() => {this.createLesson()}} className="btn btn-outline-dark" type="submit">Add</button>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        )
    }
}