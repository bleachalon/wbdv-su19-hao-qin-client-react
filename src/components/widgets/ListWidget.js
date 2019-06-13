import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) =>
    <div name= "List">
        <div hidden={preview} >
        <h1>List Widget</h1>
        <label for="list" >List Item</label>
            <textarea
                id="list" 
                className= "form-control mb-3"
                defaultValue={widget.text}
                onChange={(e) => updateWidget({...widget, text: e.target.value})}
                placeholder="Enter one list item per line"></textarea>

        <select
            className="custom-select"
            onChange={(e2) => updateWidget({...widget, ordered: e2.target.value})}
            value={widget.ordered}>
            <option value= "unordered" >Unordered List</option>
            <option value= "ordered">Ordered List</option>
        </select>


        <label for="name">Widegt Name</label>
        <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>



        <h2>Preview</h2>
        </div>

        {
            widget.ordered=='unordered' && <ul>{widget.text.split('\n').map((item,index)=>(<li key={index}>{item}</li>))}</ul>
        }
        {
            widget.ordered=='ordered' && <ol>{widget.text.split('\n').map((item,index)=>(<li key={index}>{item}</li>))}</ol>
        }
    </div>


export default ListWidget