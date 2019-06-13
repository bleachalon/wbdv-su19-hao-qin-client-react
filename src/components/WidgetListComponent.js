import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

//const WidgetListComponent = ({widgets, preview, deleteWidget, createWidget, updateWidget, upWidget,downWidget, previewChange}) =>//extends React.Component{
class WidgetListComponent extends React.Component {
    constructor(props){
        super(props)
        this.props.findAllWidgets()
    }

    render(){
        return(
            // <div>
            //     <ul>
            //         {
            //             this.props.widgets.map(widget=> <li>{widget.id}abcd</li>)
            //         }
            //     </ul>
            // </div>
            <ul className="list-group mt-3">
            <div className="mb-3" >
                <button className="float-right btn btn-success" >save</button>
                <button className="float-right btn btn-warning" 
                    onClick={()=>this.props.previewChange()}    
                >preview</button>
            </div>
            {
                this.props.widgets.map(widget =>
                    <li className="list-group-item mb-3" key={widget.id}>
                        <div className="input-group mb-3" hidden={this.props.preview} >
                            <select
                                className="custom-select"
                                onChange={(event) => this.props.updateWidget({...widget, type: event.target.value})}
                                value={widget.type}>
                                <option value="Heading">Heading</option>
                                <option value="Paragraph">Paragraph</option>
                                <option value="Image">Image</option>
                                <option value="List">List</option>
                                <option value="Link">Link</option>
                            </select>
                            <div className="input-group-append">
                                <button
                                    className= "btn btn-dark"
                                    onClick={() => this.props.deleteWidget(widget.id)}>
                                    Delete
                                </button>
                                <button
                                    // className= {`btn btn-dark ${widgets.indexOf(widget)==0? 'd-none' : ''}`}
                                    onClick={()=> this.props.upWidget(widget)}>
                                    UP
                                </button>
                                <button
                                    // className = {` btn btn-dark ${widgets.indexOf(widget)==(widgets.length-1)? 'd-none': ''}`}
                                    onClick={()=> this.props.downWidget(widget)}>
                                    Down
                                </button>
                            </div>
                        </div>
                        {
                            widget.type === 'Heading' &&
                            <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview} />
                        }
                        {
                            widget.type === 'Paragraph' &&
                            <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>
                        }
                        {
                            widget.type === 'Link' &&
                            <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>
                        }
                        {
                            widget.type === 'List' &&
                            <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>
                        }
                        {
                            widget.type === 'Image' &&
                            <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>
                        }
                    </li>
                )
            }
                <button  className= "btn btn-danger" onClick={()=>this.props.createWidget()}>
                    Add
                </button>
    
        </ul>
    
        )
    }
}
export default WidgetListComponent