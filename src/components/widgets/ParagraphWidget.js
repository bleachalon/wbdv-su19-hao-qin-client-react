import React from 'react'

const ParagraphWidget = ({widget, updateWidget, preview}) =>
    <div name = "Paragraph">
        <div hidden={preview} >
        <h1>Paragraph Widget</h1>
        <label for="text" >Paragraph Text</label>
        <textarea
            id="text" 
            className= "form-control mb-3"
            defaultValue={widget.text}
            onChange={(e) => updateWidget({...widget, text: e.target.value})}
            placeholder="Paragraph text"></textarea>

        <label for="name">Widegt Name</label>
        <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>



        
        <h2>Preview</h2>
        </div>

        <div>
                {widget.text}
        </div>
    </div>

export default ParagraphWidget