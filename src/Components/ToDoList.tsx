import React from 'react';
import './ToDoList.css';

interface ToDoListProps {
    items: { id: string, text: string }[];
    onDelete: (id: string) => void;
}

const TodoList: React.FC<ToDoListProps> = props => {

    return <ul>
        {props.items.map(toDo => {
            return <li key={toDo.id}>
                <span>{toDo.text}</span><button onClick={props.onDelete.bind(null, toDo.id)} >DELETE</button>
            </li>
        })}
    </ul>
};

export default TodoList;