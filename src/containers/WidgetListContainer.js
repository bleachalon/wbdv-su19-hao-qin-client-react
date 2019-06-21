import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'
import service from "../services/WidgetsService";

const WidgetsService = service.getInstance();

const stateToPropMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const propsToDispatcher = dispatch => ({
    findAllWidgets: () =>
        WidgetsService.findAllWidgets()
        .then(widgets => dispatch({type: 'FIND_ALL_WIDGETS', widgets: widgets })),
        
    updateWidget: widget => 
        WidgetsService.updateWidget(widget)
        .then(widgets => dispatch({type: 'UPDATE_WIDGET', widgets: widgets})),

    deleteWidget: (widgetId) => 
        WidgetsService.deleteWidget(widgetId)
         .then(widgets=> dispatch({type: 'DELETE_WIDGET', widgets: widgets})),

    createWidget: () => 
        WidgetsService.createWidget({
            name: 'New Widget',
            type: 0
        }).then(widgets => dispatch({type: 'CREATE_WIDGET', widgets: widgets})),

    upWidget: (wid) =>{
        dispatch({type:'UP_WIDGET', widget:wid})
    },
    downWidget:(wid)=>{
        dispatch({type: 'DOWN_WIDGET', widget:wid})
    },
    previewChange:() =>{
        dispatch({type: 'PREVIEW'})
    }
})

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)
(WidgetListComponent)

export default WidgetListContainer