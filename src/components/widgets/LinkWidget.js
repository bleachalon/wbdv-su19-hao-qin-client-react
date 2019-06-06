import React from 'react'

const LinkWidget = ({widget, updateWidget, preview}) =>
    <div>
        <div hidden={preview} >
        <h1>Link Widget</h1>
        <label for="link">Link</label>
        <input id="link" className="form-control mb-3" placeholder="http://..." defaultValue={widget.link}
        onChange={(e) => updateWidget({...widget, link: e.target.value})}/>

        <label for="linkText">Link Text</label>
        <input id="linkText" className="form-control mb-3" placeholder="LinkText" defaultValue={widget.linkText}
        onChange={(e) => updateWidget({...widget, linkText: e.target.value})}/>

        <label for="name">Widegt Name</label>
        <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>


        <h2>Preview</h2>
        </div>

        <a href={widget.link}>{widget.linkText!=null? widget.linkText : 'Default Link Text'}</a>
        
    </div>

export default LinkWidget