import React from 'react';

export const Checkbox = ({text, value, checked}) => {
    return (
        <div className="todo-checkox" checked={checked} defaultValue={value}><span className="checked-state"></span><span>{text}</span></div>
    )
}