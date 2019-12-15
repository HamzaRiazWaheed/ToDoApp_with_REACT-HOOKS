import React from 'react';
import ATodoItem from './atodoItem'


const TodoItem = (item) => {
    return (
        <div className="todo-item">
            <ATodoItem {...item}></ATodoItem>
        </div>
    )
}

export default TodoItem;