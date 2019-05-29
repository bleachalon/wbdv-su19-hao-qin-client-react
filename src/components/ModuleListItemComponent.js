import React from 'react'

const ModuleListItemComponent = ({state, updateState, deleteModule, module, params, input}) =>
<li className={`list-group-item ${module.id == params.moduleId? 'active' : ''}`}>
    {!state.editing &&
        <span>
            <a href={`/courses/${params.courseId}/modules/${module.id}/lessons/1/topics/1`}
               style={{"color": module.id == params.moduleId? 'white' : 'black'}}>
                {module.title}
            </a>
            <i onClick={() => {updateState({editing: true})}} className="fa fa-pencil float-right"></i>
            <i onClick={() => {deleteModule(module.id)}} className="fa fa-remove float-right"></i>
        </span>
    }
    {state.editing &&
        <span>
            <input
                ref={node => input = node}
                style={{'border': 'none'}}
                defaultValue={module.title}
                onChange={(e) => updateState({'moduleTitle': e.target.value})}
                className="form-control-sm"/>
            <i onClick={() => {updateState({editing: false})}} className="fa fa-check float-right"></i>
        </span>
    }
</li>

export default ModuleListItemComponent;