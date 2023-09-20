import { FormEventHandler, useState } from "react";

interface ITask {
  name: string;
  id: string;
  completed: boolean;
}

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<ITask[]>([]);
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!newTaskName) {
      return;
    }
    setTodos((prev) =>
      prev.concat([
        { name: newTaskName, id: Date.now().toFixed(5), completed: false },
      ])
    );

    setNewTaskName("");
  };

  const handleToggleCompleted = (isCompleted: boolean, id: string) => {
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: isCompleted };
        }

        return task;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        New task
        <input
          data-testid="todo-input"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button
          disabled={!newTaskName}
          type="submit"
          data-testid="add-todo-button"
        >
          Add Todo
        </button>
      </form>
      <div>
        List:
        <ul data-testid="todo-list">
          {todos.map((task) => {
            return (
              <li key={task.id}>
                {task.name}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    handleToggleCompleted(!task.completed, task.id)
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
