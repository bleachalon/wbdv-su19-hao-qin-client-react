import topics from './topics.json'

export default class TopicService {

    static myInstance = null;

    static getInstance() {
        if (TopicService.myInstance == null) {
            TopicService.myInstance =
                new TopicService();
        }
        return this.myInstance;
    }

    createtopic = (courseId, topic) => {
        topic['courseId'] = courseId
        topics.push(topic)
    }
    findAlltopics = () =>
        topics
    findAlltopicForModuleById = moduleId =>
        topics.filter(topic => topic.moduleId == moduleId)
    updatetopicForModuleById  = (moduleId, newtopic) => {
        topics = topics.map(
            topic => topic.moduleId == moduleId ?
                newtopic : topic)
    }
    deletetopic = topicId => {
        topics = topics.filter(topic => topic.id !== topicId)
    }
}
