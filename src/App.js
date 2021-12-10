import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Counter from "./components/Counter";
import Tasks from "./components/Tasks";

// import initialTasks from "./components/data/tasks";

import styled from "styled-components";

const initialTasks = [
  {
    id: 2,
    label: "Coder une todolist CRUD en React",
    done: true,
  },
  {
    id: 13,
    label: "Faire persister les tâches dans le localStorage",
    done: true,
  },
  {
    id: 4,
    label: "Nourrir le chat",
    done: false,
  },
  {
    id: 8,
    label: "Faire les courses!",
    done: false,
  },
];

const HeaderDiv = styled.div`
  padding: 1em;
  display: flex;
  color: #93c47d;
  flex-wrap: wrap;
  min-height: 10vh;
  align-items: center;
  background-color: #303030;
  justify-content: space-between;

  h1 {
    margin: 0;
  }

  h2 {
    padding: 0.5em;
    transition: 0.2s;
    border-radius: 50%;

    border: 0.2em solid #93c47d;

    &:hover {
      color: #303030;
      background-color: #93c47d;
    }
  }

  a {
    color: #93c47d;
  }

  @media (min-width: 769px) {
    padding: 1em 5em;
  }
`;

const TodoListDiv = styled.div`
  min-height: 100vh;
  padding: 3em 0.5em;
  /* background-color: #93c47d; */
  background: linear-gradient(15deg, #16537e, #93c47d);

  @media (min-width: 769px) {
    padding: 5em 10em;
  }

  @media (min-width: 1025px) {
    padding: 5em 20em;
  }

  @media (min-width: 1441px) {
    padding: 5em 30em;
  }
`;

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskLabel, setTaskLabel] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editLabel, setEditLabel] = useState("");

  // =====================================================
  // ============ SAVE TASKS IN LOCALSTORAGE =============
  // =====================================================

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTasks(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("todos", json);
  }, [tasks, taskStatus]);

  // =====================================================
  // =================== ADD NEW TASK ====================
  // =====================================================

  const addTask = () => {
    if (tasks.length === 0) {
      const newTask = {
        id: 1,
        label: taskLabel,
        done: false,
      };
      const newArrayTasks = [...tasks];
      newArrayTasks.push(newTask);
      setTasks(newArrayTasks);
      setTaskLabel("");
    } else {
      const idTab = tasks.map((item) => item.id);
      const idMax = Math.max(...idTab);
      const newTask = {
        id: idMax + 1,
        label: taskLabel,
        done: false,
      };

      const newArrayTasks = [...tasks];
      newArrayTasks.push(newTask);
      setTasks(newArrayTasks);
      setTaskLabel("");
    }
  };

  const updateTaskLabel = (newValue) => {
    setTaskLabel(newValue);
  };

  // =====================================================
  // ================ CHANGE TASK STATUS =================
  // =====================================================

  const updateTaskStatus = (newValue, id) => {
    const updatedStatus = tasks.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTaskStatus(updatedStatus);
  };

  // =====================================================
  // ================== EDIT TASK LABEL ==================
  // =====================================================

  const isEditing = (id) => {
    setEditMode(id);
    setEditLabel("");
  };

  const editTaskLabel = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.label = editLabel;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditMode(null);
    setEditLabel("");
  };

  // =====================================================
  // ==================== DELETE TASK ====================
  // =====================================================

  const deleteTask = (id) => {
    const updateTaskList = [...tasks].filter((task) => task.id !== id);
    setTasks(updateTaskList);
  };

  const tasksNotDone = tasks.filter((element) => element.done === false);
  const nbTasksNotDone = tasksNotDone.length;

  // =====================================================
  return (
    <>
      <HeaderDiv>
        <a href="https://pascal.la">
          <h2>PL</h2>
        </a>
        <h1>TODO LIST</h1>
      </HeaderDiv>

      <TodoListDiv>
        <Form
          manageSubmit={addTask}
          value={taskLabel}
          setValue={updateTaskLabel}
        />
        <Counter nbTasks={nbTasksNotDone} />
        <Tasks
          value={editLabel}
          setValue={setEditLabel}
          editMode={editMode}
          tasksList={tasks}
          isEditing={isEditing}
          deleteTask={deleteTask}
          updateStatus={updateTaskStatus}
          editTaskLabel={editTaskLabel}
        />
      </TodoListDiv>
    </>
  );
};

export default TodoList;
