import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'
import ModuleService from '../services/ModuleService'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService=ModuleService.getInstance()
        this.state = {
            course: this.props.course,
            modules : [],
            module: {
                    title : "New Module",
                }
        }
    }

    componentDidMount = () =>
        this.findAllModulesForCourse(this.props.params.courseId)

    findAllModules=()=>
        this.moduleService.findAllModules().then(modules => 
            this.setState
            ({modules: modules}));

    findAllModulesForCourse=(courseId)=>
        this.moduleService.findAllModulesForCourse(courseId).then(modules => 
            this.setState
            ({modules: modules}))

    deleteModule = moduleId =>
        this.moduleService
        .deleteModule(moduleId)
        .then(modules => 
            this.setState
            ({modules: modules}))

    createModuleForCourse = () => 
        this.moduleService
        .createModuleForCourse(this.props.params.courseId, this.state.module)
        .then(modules => 
            this.setState
            ({modules: modules}))
    
    titleChange = (event) => {
        this.setState({
            module: {
                title : event.target.value
            }
        })
    }


    updateModule = (module) =>
    this.moduleService.updateModule(module).then(()=>this.findAllModulesForCourse(this.props.params.courseId));  


    render() {
        return(
            <div>
                    {console.log(this.props.params.courseId)}
                <ul className="list-group">
                <li className="list-group-item">
                    <div className="input-group mb-3">
                        <input  onChange={this.titleChange} className="form-control" type="text" value={this.state.module.title}></input>
                        <div className="input-group-append">
                            <button onClick={() => {this.createModuleForCourse()}} className="btn btn-outline-dark" type="submit">Add</button>
                        </div>
                    </div>
                </li>
           
            <ModuleListComponent
                updateModule={this.updateModule}
                deleteModule={this.deleteModule}
                params={this.props.params}
                course={this.state.course}
                modules={this.state.modules}/>
        
            </ul>
            
            </div>
        
        )
    }
}