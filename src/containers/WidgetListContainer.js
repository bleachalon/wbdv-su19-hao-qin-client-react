import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropMapper = state => ({
    widgets: state.widgets,
    preview: state.preview
})

const propsToDispatcher = dispatch => ({
    updateWidget: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    deleteWidget: (wid) => {dispatch({type: 'DELETE_WIDGET', widgetId: wid})},
    createWidget: () => {
        dispatch({
            type: 'CREATE_WIDGET'
        })
    },
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