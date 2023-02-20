const Move = (index) => {
  console.log(index); // later to move to other list
};

function ToDoList() {
  const todo = ["sweep", "vacuum", "dust", "feed cat"];

  return (
    <ul>
      {todo.map((chore, index) => (
        <li key={index} onClick={() => Move(index)}>
          {chore}
        </li>
      ))}
    </ul>
  );
}

function ToDoAssigned() {
  const todo = [];
  return (
    <ul>
      {todo.map((chore, index) => (
        <li key={index} onClick={() => Move(index)}>
          {chore}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
