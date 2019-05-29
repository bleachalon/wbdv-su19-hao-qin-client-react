import React from 'react'
import ModuleListItemContainer from '../containers/ModuleListItemContainer'
const ModuleListComponent = ({create, modules, params, deleteModule}) =>
<div>
{
            modules.map(module =>
                <ModuleListItemContainer
                    deleteModule={deleteModule}
                    key={module.id}
                    module={module}
                    params={params}/>
            )
        }
</div>


export default ModuleListComponent