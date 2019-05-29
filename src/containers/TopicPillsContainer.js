import React from 'react'
import TopicPillsComponent from '../components/TopicPillComponent'

export default class TopicPillsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            courseId: props.params.courseId,
            moduleId: props.params.moduleId,
            lessonId: props.params.lessonId,
            topicId: props.params.topicId,
            topics: props.topics,

            topic : {
                id: '-5',
                title : 'New Topic'
            }
        }
    }
  
    deleteTopic =(topicId)=>
        this.setState({
            topics: this.state.topics.filter(topic => topic.id !== topicId)
        })

    createTopic = () => {
        this.setState({
            topics: [...this.state.topics, this.state.topic]
        })
    }

    titleChange = (event) => {
        this.setState({
            topic: {
                title : event.target.value,
                id : (new Date()).getTime()
            }
        })
    }

    render() {
        return(
            <div>
                <ul className="nav nav-pills mt-2">
                    <TopicPillsComponent
                    deleteTopic={this.deleteTopic}
                    params={this.props.params}
                    topics={this.state.topics}/>
                <li>
                    <div className="input-group mb-3">
                        <input onChange= {this.titleChange} className="form-control" type="text" value={this.state.topic.title}></input>
                        <div className="input-group-append">
                            <button onClick={() => {this.createTopic()}} className="btn btn-outline-dark" type="submit">Add</button>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        )
    }
}