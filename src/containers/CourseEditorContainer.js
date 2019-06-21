import React from 'react'
import CourseEditorComponent from '../components/CourseEditorComponent'
import CourseService from '../services/CourseService'
import ModuleService from '../services/ModuleService'
import LessonService from '../services/LessonService'
import topicService from '../services/TopicService'

export default class CourseEditorContainer
    extends React.Component {
    constructor(props) {
        super(props)
        const courseId = props.match.params.courseId;
        const moduleId = props.match.params.moduleId;
        this.courseService = CourseService.getInstance()
        this.moduleService = ModuleService.getInstance()
        this.lessonService = LessonService.getInstance()
        this.topicService = topicService.getInstance()
        const course = this.courseService.findCourseById(courseId)
        //const modules = this.moduleService.findAllModulesForCourse(courseId)
        const lessons = this.lessonService.findAllLessonForModuleById(moduleId)
        const topics = this.topicService.findAlltopicForModuleById(moduleId)
        this.state = {
            course: course,
           // modules: modules,
            lessons: lessons,
            topics: topics
        }
    }
    render() {
        return(
            <div>
            <CourseEditorComponent
                course={this.state.course}
               // modules={this.state.modules}
                lessons={this.state.lessons}
                topics={this.state.topics}
                params={this.props.match.params}/>
                </div>
        )
    }
}