import React from 'react'

const ListWidget = ({widget, updateWidget, preview}) =>
    <div>
        <div hidden={preview} >
        <h1>List Widget</h1>
        <label for="list" >List Item</label>
            <textarea
                id="list" 
                className= "form-control mb-3"
                defaultValue={widget.list}
                onChange={(e) => updateWidget({...widget, list: e.target.value})}
                placeholder="Enter one list item per line"></textarea>

        <select
            className="custom-select"
            onChange={(event) => updateWidget({...widget, listType: event.target.value})}
            value={widget.listType}>
            <option value="unordered">Unordered List</option>
            <option value="ordered">Ordered List</option>
        </select>


        <label for="name">Widegt Name</label>
        <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>



        <h2>Preview</h2>
        </div>

        {
            widget.listType=='unordered' && <ul>{widget.list.split('\n').map((item,index)=>(<li key={index}>{item}</li>))}</ul>
        }
        {
            widget.listType=='ordered' && <ol>{widget.list.split('\n').map((item,index)=>(<li key={index}>{item}</li>))}</ol>
        }
    </div>


export default ListWidget