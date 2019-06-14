
var adr = "http://localhost:8080/api/"
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
        fetch(adr + "widgets", {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(this.findAllWidgets)
    

    findAllWidgets = () =>
        fetch(adr + "widgets").then(response => response.json())


    findWidgetsById = widgetId =>
        fetch( adr + `widgets/${widgetId}`).then(response => response.json())

    updateWidget  = (newWidget) => 
        fetch( adr + `widgets/${newWidget.id}`, {
            method: 'PUT',
            body: JSON.stringify(newWidget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(this.findAllWidgets)

    deleteWidget = widgetId => 
        fetch(adr +`widgets/${widgetId}`, {
            method: 'DELETE'
        }).then(this.findAllWidgets)
    
}
