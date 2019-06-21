import React from 'react'

const ModuleListItemComponent = ({ updateModule, editing, deleteModule, module,edit, params, input}) =>
<li className={`list-group-item ${module.id == params.moduleId? 'active' : ''}`}>
    {!edit &&
        <span>
            <a href={`/courses/${params.courseId}/modules/${module.id}/lessons/1/topics/1`}
               style={{"color": module.id == params.moduleId? 'white' : 'black'}}>
                {module.title}
            </a>
            <i onClick={() => {editing()}} className="fa fa-pencil float-right"></i>
            <i onClick={() => {deleteModule(module.id)}} className="fa fa-remove float-right"></i>
        </span>
    }
    {edit &&
        <span>
            <input
                ref={node => input = node}
                style={{'border': 'none'}}
                defaultValue={module.title}
                onChange={(e) => updateModule({...module, title : e.target.value})}
                className="form-control"/>
            <i onClick={() => {editing()}} className="fa fa-check float-right"></i>
        </span>
    }
</li>

export default ModuleListItemComponent;