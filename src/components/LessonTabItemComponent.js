import React from 'react'

const LessonTabItemComponent = ({state, updateState, deleteModule, lesson, params, input}) =>
<li className="nav-item">
    {!state.editing &&
        <span>
            <a href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${lesson.id}/topics/1`}
               className={lesson.id == params.lessonId ? 'nav-link active':'nav-link'}>
                {lesson.title}
            </a>
            <i onClick={() => {updateState({editing: true})}} className="fa fa-pencil float-right"></i>
            <i onClick={() => {deleteModule(lesson.id)}} className="fa fa-remove float-right"></i>
        </span>
    }
    {state.editing &&
        <span>
            <input
                ref={node => input = node}
                style={{'border': 'none'}}
                defaultValue={lesson.title}
                onChange={(e) => updateState({'lessonTitle': e.target.value})}
                className="form-control-sm"/>
            <i onClick={() => {updateState({editing: false})}} className="fa fa-check float-right"></i>
        </span>
    }
</li>

export default LessonTabItemComponent;