import React, {useContext} from 'react';
import {ListContext} from '../context/index';
import {Checkbox, Button} from '../styled/index';


const ATodoItem = (item) => {
    const {dispatch} = useContext(ListContext);
    
    return (
        <>
            <Checkbox checked={item.checked} onClick={() => {
                dispatch({type: 'TOGGLE_CHECKED', item})
            }}></Checkbox>
            
            <input type="text" disabled={item.checked ? true: false} defaultValue={item.text} onBlur={(e) =>{
                dispatch({type: 'UPDATE', item: {...item, text: e.target.value}})}
            } />
            <Button delete onClick={() => dispatch({type: 'DELETE', id: item.id})}>Delete</Button>
        </>
    )
}

export default ATodoItem;