import { useState } from 'react';
import UserProfile from './src/components/UserProfile';
import FilterButtonGroup from './src/components/FilterButtonGroup';
import TaskItem from './src/components/TaskItem';
import { useTasks } from './src/hooks/useTasks';
import { getFilteredTasks } from './src/utils/taskFilters';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = getFilteredTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <FilterButtonGroup currentFilter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
