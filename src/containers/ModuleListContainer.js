import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course,
            modules : this.props.modules,

            module : {
                id: '-10',
                title: 'New Module'
            }
        }
    }
    deleteModule = moduleId =>
        this.setState({
            modules: this.state.modules.filter(module => module.id !== moduleId)
        })

    createModule = () => {
        this.setState({
            modules: [...this.state.modules, this.state.module]
        })
    }
    
    titleChange = (event) => {
        this.setState({
            module: {
                title : event.target.value,
                id : (new Date()).getTime()
            }
        })
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                <li className="list-group-item">
                    <div className="input-group mb-3">
                        <input onChange= {this.titleChange} className="form-control" type="text" value={this.state.module.title}></input>
                        <div className="input-group-append">
                            <button onClick={() => {this.createModule()}} className="btn btn-outline-dark" type="submit">Add</button>
                        </div>
                    </div>
                </li>
           
            <ModuleListComponent
                deleteModule={this.deleteModule}
                params={this.props.params}
                course={this.state.course}
                modules={this.state.modules}/>
        
            </ul>
            
            </div>
        
        )
    }
}