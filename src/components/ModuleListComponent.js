import React from 'react'
import ModuleListItemContainer from '../containers/ModuleListItemContainer'
const ModuleListComponent = ({updateModule, modules, params, deleteModule}) =>
<div>
{
            modules.map(module1 =>
                <ModuleListItemContainer
                    updateModule={updateModule}
                    deleteModule={deleteModule}
                    key={module1.id}
                    module={module1}
                    params={params}/>
            )
        }
</div>


export default ModuleListComponent