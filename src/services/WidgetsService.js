

export default class WidgetsService {

    static myInstance = null;

    static getInstance() {
        if (WidgetsService.myInstance == null) {
            WidgetsService.myInstance =
                new WidgetsService();
        }
        return this.myInstance;
    }

    createWidget = (widget) => 
        fetch("http://localhost:8080/api/widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    

    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets").then(response => response.json())


    findWidgetsById = widgetId =>
        fetch(`http://localhost:8080/api/widgets/${widgetId}`).then(response => response.json())

    updateWidget  = (newWidget) => 
        fetch(`http://localhost:8080/api/widgets/${newWidget.id}`, {
            method: 'PUT',
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

    deleteWidget = widgetId => 
        fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
            method: 'DELETE'
        }).then(response => response.json())
    
}
