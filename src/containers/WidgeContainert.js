import React from 'react'
import './WidgeContainerStyle.css'

export default class WidgetContainer extends React.Component{
    render(){
        return(
            <div>
            <form name="Heading">
            <div className="row mb-4">
                <div className="col-12 col-md-7 fHead">Heading</div>
                <div className="col-12 col-md-5">
                    <label className="sr-only" for="inlineFormCustomSelect">Type</label>
                    <select className="custom-select" id="inlineFormCustomSelect">
                        <option value="1" selected>Heading</option>
                        <option value="2">Paragraph</option>
                        <option value="3">List</option>
                        <option value="4">Image</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" value="Heading Text"></input>
            </div>
            <div className="form-group">
                <select className="custom-select" id="inlineFormCustomSelect">
                    <option value="1" selected>Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Heading Widget Name"></input>
            </div>
            <div className="col-12 col-md-9 offset-md-4">
                    <div className="d-inline"><button type="submit" className="btn btn-dark">UP</button></div>
                    <div className="d-inline"><button type="submit" className="btn btn-dark">DOWN</button></div>
                    <div className="d-inline"><button type="submit" className="btn btn-dark">Delete</button></div>
            </div>
            <div className="Preview">
                Preview
            </div>
        </form>

        <form name="Paragraph">
            <div className="row mb-4">
                <div className="col-12 col-md-7 fHead">Paragraph</div>
                <div className="col-12 col-md-5">
                    <label className="sr-only" for="inlineFormCustomSelect">Type</label>
                    <select className="custom-select" id="inlineFormCustomSelect">
                        <option value="1">Heading</option>
                        <option value="2" selected>Paragraph</option>
                        <option value="3">List</option>
                        <option value="4">Image</option>
                    </select>
                </div>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" aria-describedby="emailHelp" placeholder="Content"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Paragraph Widget Name"></input>
                </div>
                <div className="col-12 col-md-9 offset-md-4">
                        <div className="d-inline"><button type="submit" className="btn btn-dark">UP</button></div>
                        <div className="d-inline"><button type="submit" className="btn btn-dark">DOWN</button></div>
                        <div className="d-inline"><button type="submit" className="btn btn-dark">Delete</button></div>
                </div>
                <div className="Preview">
                    Preview
                </div>
            </form>

            <form name="List">
                <div className="row mb-4">
                    <div className="col-12 col-md-7 fHead">List</div>
                    <div className="col-12 col-md-5">
                        <label className="sr-only" for="inlineFormCustomSelect">Type</label>
                        <select className="custom-select" id="inlineFormCustomSelect">
                            <option value="1">Heading</option>
                            <option value="2">Paragraph</option>
                            <option value="3" selected>List</option>
                            <option value="4">Image</option>
                        </select>
                    </div>
                    </div>
                    <div className="form-group">
                        <textarea type="text" className="form-control" aria-describedby="emailHelp" placeholder="List items in seperate rows"></textarea>
                        </div>
                        <div className="form-group">
                            <select className="custom-select mr-sm-2">
                                <option value="1" selected>Ordered List</option>
                                <option value="2">Unordered List</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="List Widget Name"></input>
                    </div>
                    <div className="col-12 col-md-9 offset-md-4">
                            <div className="d-inline"><button type="submit" className="btn btn-dark">UP</button></div>
                            <div className="d-inline"><button type="submit" className="btn btn-dark">DOWN</button></div>
                            <div className="d-inline"><button type="submit" className="btn btn-dark">Delete</button></div>
                    </div>
                    <div className="Preview">
                        Preview
                    </div>
                </form>

                <form name="Image">
                    <div className="row mb-4">
                        <div className="col-12 col-md-7 fHead">Image</div>
                        <div className="col-12 col-md-5">
                            <label className="sr-only" for="inlineFormCustomSelect">Type</label>
                            <select className="custom-select" id="inlineFormCustomSelect">
                                <option value="1">Heading</option>
                                <option value="2">Paragraph</option>
                                <option value="3">List</option>
                                <option value="4" selected>Image</option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group">
                            <input type="url" className="form-control" aria-describedby="emailHelp" placeholder="Url for image" value="https://imageulr.com"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Image Widget Name"></input>
                        </div>
                        <div className="col-12 col-md-9 offset-md-4">
                                <div className="d-inline"><button type="submit" className="btn btn-dark">UP</button></div>
                                <div className="d-inline"><button type="submit" className="btn btn-dark">DOWN</button></div>
                                <div className="d-inline"><button type="submit" className="btn btn-dark">Delete</button></div>
                        </div>
                        <div className="Preview">
                            Preview
                        </div>
                    </form>
                    <div id="addBtn">
                    <button class="btnAdd">+</button>
                </div>
                <button type="submit" class="btn btn-dark btn-block" id="btnS" >Save</button>
                 </div>
            
        )
    }
}