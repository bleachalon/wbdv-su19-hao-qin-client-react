import widgets from '../services/widgets.json'
// reducer => state => store => provider => container => map to props => components
const up=(widget, widgets)=>{
    let newWids=[...widgets]
    var x = widgets.indexOf(widget)
    var temp=newWids[x]
    newWids[x]=newWids[x-1]
    newWids[x-1]=temp
    return newWids
}

const down=(widget, widgets)=>{
    let newWids=[...widgets]
    var x = widgets.indexOf(widget)
    var temp=newWids[x]
    newWids[x]=newWids[x+1]
    newWids[x+1]=temp
    return newWids
}

const findWidget=(widgetId, widgets)=>{
    return widgets.filter(widget => widget.id == widgetId)
}

const widgetReducer = (state={widgets: [], preview: false}, action) => {
    if(action.type === 'DELETE_WIDGET') {
        return{
            widgets: action.widgets
        }
    } else if(action.type === 'CREATE_WIDGET') {
        return{
            widgets: action.widgets
        }
    } else if(action.type === 'UPDATE_WIDGET') {
        return{
            widgets: action.widgets
        }
    }else if(action.type === 'UP_WIDGET'){
        return{
            widgets: up(action.widget, state.widgets)
        }
    }else if(action.type === 'DOWN_WIDGET'){
        return{
            widgets: down(action.widget, state.widgets)
        }
    }else if(action.type === 'PREVIEW'){
        return{
            widgets: state.widgets,
            preview: !state.preview
        }
    }else if(action.type === 'FIND_WIDGET'){
        return{
            widgets: findWidget(1, state.widgets)
        }
    }else if(action.type === 'FIND_ALL_WIDGETS'){
        return{
            widgets: action.widgets
        }
    }else if(action.type === 'FIND_ALL_WIDGETS_FOR_TOPIC'){
        return{
            widgets: state.widgets.filter(widget => widget.topicId != action.topicId)
        }
    }
    return state;
}

export default widgetReducer