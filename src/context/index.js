import React, {useReducer, useEffect, useRef} from 'react';
import uuid from 'uuid';
// set the context Provider

let list = []

const Dispatchers = (state, action) => {
    switch (action.type) {
        case 'LOAD_ALL': {
            return action.list
        }
        case 'ADD':{
            return [...state , {id:uuid(),checked:false, text:`Task ${state.length + 1}`}]
        }
        case 'UPDATE': {
            return _updateItem(state, action.item)
        }
        case 'TOGGLE_CHECKED': {
            return _updateItem(state, {...action.item , checked: !action.item.checked})
        }
        case 'DELETE': {
            return state.filter(item => {
                return item.id !== action.id
            })
        }
        case 'DELETE_ALL': {
            return []
        }
        case 'DELETE_COMPLETED': {
            return state.filter(item => {
                return !item.checked
            })
        }
        default:
            return state;
    }
}

let listReducer = (state, action) => {
    console.log(state, action)
    const newState = Dispatchers(state, action);
    fetch('http://localhost:1234/api/UpdateItems/', {
        method: 'POST',
        body: JSON.stringify(newState),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .then(res => console.log('data saved'))
    return newState;

}

export const ListContext = React.createContext(list)

export const ListContextProvider = props => {
    const [state, dispatch] = useReducer(listReducer, list)
    // Execute On load
    useEffect(() => {
        fetch('http://localhost:1234/api/getItems/')
        .then(res => res.json())
        .then(res => {
            console.log('in Use Effect');
            dispatch({type: 'LOAD_ALL', list:res})
        });
    }, [])

    return (
        <ListContext.Provider value={{state, dispatch}}>
            {props.children}
        </ListContext.Provider>
    )
}

const _updateItem = (state,item) => {
    return state.map(it => {
        return it.id === item.id ? item : it
    })
}
