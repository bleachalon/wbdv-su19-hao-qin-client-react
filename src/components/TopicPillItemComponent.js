import React from 'react'

const TopicPillItemComponent = ({state, updateState, deleteTopic, topic, params, input}) =>
<li className="nav-item">
    {!state.editing &&
        <span>
            <a href={`/courses/${params.courseId}/modules/${params.moduleId}/lessons/${params.lessonId}/topics/${topic.id}`}
               className={topic.id == params.topicId ? 'nav-link active':'nav-link'}>
                {topic.title}
            </a>
            <i onClick={() => {updateState({editing: true})}} className="fa fa-pencil float-right"></i>
            <i onClick={() => {deleteTopic(topic.id)}} className="fa fa-remove float-right"></i>
        </span>
    }
    {state.editing &&
        <span>
            <input
                ref={node => input = node}
                style={{'border': 'none'}}
                defaultValue={topic.title}
                onChange={(e) => updateState({'topicTitle': e.target.value})}
                className="form-control-sm"/>
            <i onClick={() => {updateState({editing: false})}} className="fa fa-check float-right"></i>
        </span>
    }
</li>

export default TopicPillItemComponent;