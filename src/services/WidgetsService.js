import widgets from './widgets.json'

export default class WidgetsService {

    static myInstance = null;

    static getInstance() {
        if (WidgetsService.myInstance == null) {
            WidgetsService.myInstance =
                new WidgetsService();
        }
        return this.myInstance;
    }

    createWidget = (topicId, widget) => {
        widget['topicId'] = topicId
        widgets.push(widget)
    }
    findAlltopics = () =>
        widgets
    findAlltopicForModuleById = topicId =>
        widgets.filter(widget => widget.topicId == topicId)
    updatetopicForModuleById  = (topicId, newWidget) => {
        widgets = widgets.map(
            widget => widget.topicId == topicId ?
                newWidget : widget)
    }
    deletetopic = widgetId => {
        widgets = widgets.filter(widget => widget.id !== widgetId)
    }
}
