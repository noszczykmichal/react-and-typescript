import React from 'react';

interface ToDoListProps{
    items: {id: string, text: string}[];
  }

const TodoList: React.FC<ToDoListProps> = props => {
    
    return <ul>
        {props.items.map(toDo=> {
            return <li key={toDo.id}>{toDo.text}</li>
        })}
    </ul>
};

export default TodoList;