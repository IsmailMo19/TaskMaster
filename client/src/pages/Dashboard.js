import React, { useState } from 'react';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Description for task 1' },
        { id: 2, title: 'Task 2', description: 'Description for task 2' },
    ]);

    const addTask = () => {
        const newTask = { id: tasks.length + 1, title: `Task ${tasks.length + 1}`, description: `Description for task ${tasks.length + 1}` };
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={addTask}>Add Task</button>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Dashboard;
