import React, {useContext} from 'react';
import {ListContext} from '../context/index'
import TodoItem from './todoItem'
import {Button, SplitView} from '../styled/index';

const TodoList = (props) => {
    const {state, dispatch} = useContext(ListContext);
    let completed = []
    let incomplete = []
    console.log(props);
    state.forEach(item => {
        return item.checked ? completed.push(<TodoItem key={item.id} {...item}></TodoItem>) : incomplete.push(<TodoItem key={item.id} {...item}></TodoItem>)
    });
    return (
        <div className="listWrapper">
            <Button primary onClick={ () => dispatch({type: "ADD"})}>ADD</Button>
            <Button delete onClick={ () => dispatch({type: "DELETE_ALL"})}>DELETE ALL</Button>
            <SplitView>
                <div>
                    <h3>Incomplete</h3>
                    {incomplete.map((item) => item)}
                </div>
                <div>
                    <h3>Complete 
                        { completed.length ? <Button delete onClick={ () => dispatch({type: "DELETE_COMPLETED"})}>Delete All Completed</Button> : null} 
                    </h3>
                    {completed.map((item) => item)}
                </div>
            </SplitView>
            
        </div>
    )
}

export default TodoList;