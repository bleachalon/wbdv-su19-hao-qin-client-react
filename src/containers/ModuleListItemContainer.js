import React from 'react'
import ModuleListItemComponent from '../components/ModuleListItemComponent'


export default class ModuleListItemContainer
    extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            module: props.module,
            edit: false
        }
    }

    editing=()=>
        this.setState({edit: !this.state.edit})

    render() {
        return (
        <ModuleListItemComponent
            updateModule= {this.props.updateModule}
            editing={this.editing}
            deleteModule={this.props.deleteModule}
            module={this.state.module}
            edit={this.state.edit}
            params={this.props.params}/>
        )
    }
}