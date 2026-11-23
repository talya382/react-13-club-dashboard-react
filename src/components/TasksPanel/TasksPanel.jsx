export default function TasksPanel({ member, tasks, onToggleTask }) {
  if (!member) {
    return <p>Select a member to see their tasks</p>
  }

  if (tasks.length === 0) {
    return <p>No tasks yet</p>
  }

  return (
    <div>
      <h3>{member.name}</h3>

      {tasks.map((task) => (
        <label key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleTask(task.id)}
          />
          {task.title}
        </label>
      ))}
    </div>
  )
}