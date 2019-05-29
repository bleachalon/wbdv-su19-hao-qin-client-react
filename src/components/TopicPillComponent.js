import React from 'react'
import TopicPillItemContainer from '../containers/TopicPillItemContainer'
const TopicPillComponent = ({topics, params, deleteTopic}) =>

        topics.map(topic =>
                <TopicPillItemContainer
                    deleteTopic={deleteTopic}
                    key={topic.id}
                    topic={topic}
                    params={params}/>
            )



export default TopicPillComponent