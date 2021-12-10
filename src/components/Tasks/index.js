import React from "react";

import Task from "./Task";

import styled from "styled-components";

const TasksUl = styled.ul`
  margin: auto;
  padding: 2em 0;
`;

const Tasks = ({
  value,
  setValue,
  editMode,
  tasksList,
  isEditing,
  deleteTask,
  updateStatus,
  editTaskLabel,
}) => {
  return (
    <TasksUl className="tasks_container">
      {tasksList.map((task) => (
        <Task
          {...task}
          key={task.id}
          value={value}
          setValue={setValue}
          editMode={editMode}
          isEditing={isEditing}
          deleteTask={deleteTask}
          editTaskLabel={editTaskLabel}
          updateStatus={updateStatus}
        />
      ))}
    </TasksUl>
  );
};

export default Tasks;
