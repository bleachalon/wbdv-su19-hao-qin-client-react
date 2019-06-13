import React from 'react'

const HeadingWidget = ({widget, updateWidget, preview}) =>
    <div name="Heading">
        <div hidden={preview}>
            <h1>Heading Widget</h1>
            <label for="heading">Heading</label>
            <input id="heading" className="form-control mb-3" placeholder="Heading text" defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}/>

            

            <label for="size">Heading Size</label>
            <select
                id="size"
                className= "custom-select mt-1 mb-3"
                onChange={(e2) => updateWidget({...widget, size: e2.target.value})}
                value={widget.size}>
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
                <option value="5">Heading 5</option>
            </select>

            <label for="name">Widegt Name</label>
            <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>

            <h2>Preview</h2>
        </div>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
    </div>

export default HeadingWidget