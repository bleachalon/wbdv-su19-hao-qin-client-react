import React from 'react'

const ImageWidget = ({widget, updateWidget, preview}) =>
    <div>
        <div hidden={preview} >
        <h1>Image Widget</h1>
        <label for="url">URL</label>
        <input id="url" className="form-control mb-3" placeholder="Image Url" defaultValue={widget.url}
        onChange={(e) => updateWidget({...widget, url: e.target.value})}/>

        <label for="name">Widegt Name</label>
        <input id="name" className="form-control mb-3" placeholder="Widegt Name"></input>

        <h2>Preview</h2>
        </div>

        <img className="img-thumbnail" src={widget.url} alt="please enter valid url"></img>
    </div>
export default ImageWidget