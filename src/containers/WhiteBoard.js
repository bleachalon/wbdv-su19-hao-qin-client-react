import React from 'react'
import CourseTableContainer from './CourseTableContainer'
import CourseGridContainer from './CourseGridContainer'
// import CourseEditorComponent from '../'

// npm install react-router-dom --save
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditorContainer from './CourseEditorContainer'

class WhiteBoard extends React.Component {
    render() {
        return(
            <Router>
                <div>
                <nav className="navbar navbar-light bg-light">
                    <h1>Course list</h1>
                    <button className="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                        
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="../login/login.template.client.html">Login</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="../register/register.template.client.html">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../profile/profile.template.client.html">Profile</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="../admin/user-admin.template.client.html">Profile</a>
                            </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Disabled</a>
                                </li>
                            </ul> 
                    </div>
                    <form className="form-inline">
                        <input className="form-control my-2 mr-sm-2" type="text" placeholder="File Name" value="New Course Title" aria-label="Search"></input>
                        <button className="btn btn-outline-dark" type="submit">Add</button>
                    </form>
                </nav>

                <Link to="/courses/table" className="float-right">Table</Link>
                <Link to="/courses/grid" className="float-right">Grid</Link>

                    <Route
                        exact={true}
                        path="/courses/table"
                        component={CourseTableContainer}/>

                    <Route
                        exact={true}
                        path="/courses/grid"
                        component={CourseGridContainer}/>

                    <Route
                        path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                        component={CourseEditorContainer}/>
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;