import React from 'react'
import LessonTabItemContainer from '../containers/LessonTabItemContainer'
const LessonTabComponent = ({lessons, params, deleteLesson}) =>
    

            lessons.map(lesson =>
                <LessonTabItemContainer
                    deleteLesson={deleteLesson}
                    key={lesson.id}
                    lesson={lesson}
                    params={params}/>
            )
        



export default LessonTabComponent