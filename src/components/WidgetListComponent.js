import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

const WidgetListComponent = ({widgets, preview, deleteWidget, createWidget, updateWidget, upWidget,downWidget, previewChange}) =>//extends React.Component{
    <ul className="list-group mt-3">
        <div className="mb-3" >
            <button className="float-right btn btn-success" >save</button>
            <button className="float-right btn btn-warning" 
                onClick={()=>previewChange()}    
            >preview</button>
        </div>
        {
            widgets.map(widget =>
                <li className="list-group-item mb-3" key={widget.id}>
                    <div className="input-group mb-3" hidden={preview} >
                        <select
                            className="custom-select"
                            onChange={(event) => updateWidget({...widget, type: event.target.value})}
                            value={widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                            <option value="LINK">Link</option>
                        </select>
                        <div className="input-group-append">
                            <button
                                className= "btn btn-dark"
                                onClick={() => deleteWidget(widget.id)}>
                                Delete
                            </button>
                            <button
                                className= {`btn btn-dark ${widgets.indexOf(widget)==0? 'd-none' : ''}`}
                                onClick={()=> upWidget(widget)}>
                                UP
                            </button>
                            <button
                                className = {` btn btn-dark ${widgets.indexOf(widget)==(widgets.length-1)? 'd-none': ''}`}
                                onClick={()=> downWidget(widget)}>
                                Down
                            </button>
                        </div>
                    </div>
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget widget={widget} updateWidget={updateWidget} preview={preview} />
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={updateWidget} preview={preview}/>
                    }
                </li>
            )
        }
            <button  className= "btn btn-danger" onClick={createWidget}>
                Add
            </button>

    </ul>
export default WidgetListComponent