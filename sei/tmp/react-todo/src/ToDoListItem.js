import './ToDoListItem.css';

export default function TodoListItem({todo, index, deleteTodo, markAsCompleted} ) {
    function handleClick() {
       if (todo.completed) {
        deleteTodo(todo)
       } else {
        markAsCompleted(todo)
       }
    }

    return (
        <li 
            className='ToDoListItem'
            style={{
                backgroundColor: index % 2 ? "#E6E6FA" : "#d8bfd8"
            }}
        >
        <span
        className="indexSpan"
        >
        {index+1}

        </span>
        <span className='itemSpan' style={{ textDecoration: todo.completed && "line-through" }}>
            {todo.text}
        </span>
        <button onClick={handleClick}>{todo.completed ? "❌" : "✔️" }</button>

        </li>
    )
}