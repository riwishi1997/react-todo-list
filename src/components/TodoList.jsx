const TodoList = ({ todos, removeTodo }) => {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;