import ToDoListItem from "./ToDoListItem";
import './ToDoList.css';

export default function ToDoList({todos, deleteTodo, markAsCompleted}) {

    const toDoListItems = todos.map(function(item, index) {
        return <ToDoListItem className="ToDoListItem" todo={item} key={index} index={index} deleteTodo={deleteTodo} markAsCompleted={markAsCompleted}/>;
    });

    return (
    <ul className="ToDoList">
        {toDoListItems}
    </ul>
    );

}

