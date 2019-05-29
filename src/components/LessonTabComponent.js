import React from 'react'
import LessonTabItemContainer from '../containers/LessonTabItemContainer'
const LessonTabComponent = ({lessons, params, deleteModule}) =>
    

            lessons.map(lesson =>
                <LessonTabItemContainer
                    deleteModule={deleteModule}
                    key={lesson.id}
                    lesson={lesson}
                    params={params}/>
            )
        



export default LessonTabComponent