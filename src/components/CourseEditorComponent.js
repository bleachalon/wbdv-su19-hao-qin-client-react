import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'
import TopicPillsContainer from '../containers/TopicPillsContainer'
import WidgetListAssignment from '../containers/WidgetListAssignment'

const CourseEditorComponent = ({course, modules, lessons, topics, params}) =>
<div>
    <h1>{course.title}</h1>
    <div className="row">
        <div className="col-4">
            <ModuleListContainer
                params={params}
                course={course}
                //modules={modules}
                />
        </div>
        <div className="col-8">
            <LessonTabsContainer
                params={params}
                course={course}
                lessons={lessons}/>

           <div className="row">
           <TopicPillsContainer
                params={params}
                course={course}
                topics={topics}/>
           </div>

           <div>
               <WidgetListAssignment/>
           </div>
        </div>
    </div>
</div>

export default CourseEditorComponent;