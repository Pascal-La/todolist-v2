import React from "react";

import styled from "styled-components";

const TaskLi = styled.li`
  display: flex;
  margin: 0.5em 0;
  min-height: 4em;
  user-select: none;
  line-height: 1.2em;
  align-items: center;
  border-radius: 0.2em;
  background-color: #f2f2f2;
  justify-content: space-between;

  label {
    flex-grow: 1;
    padding: 0.3em;
    max-width: 80%;
    transition: 0.2s;
    word-break: break-word;
  }

  .label--done {
    color: lightgrey;
    text-decoration: line-through;
  }

  form {
    width: 100%;
    input {
      width: 95%;
      border: none;
      outline: none;
      padding: 0.5em;
      min-height: 2.5em;
      background-color: #f2f2f2;
    }
  }

  .task_buttons-group {
    display: flex;
    /* flex-wrap: nowrap; */
  }

  .task_button {
    width: 2em;
    height: 4em;
    display: flex;
    color: #444444;
    cursor: pointer;
    font-size: large;
    transition: 0.25s;
    align-items: center;
    justify-content: center;

    &-check {
      background-color: lightgrey;
      &:hover {
        width: 2.5em;
        background-color: darkgrey;
      }
      &--ok {
        background-color: grey;
        &:hover {
          width: 2.5em;
          background-color: darkgrey;
        }
      }
    }
    &-delete {
      background-color: #cc0000;
      &:hover {
        width: 2.5em;
        background-color: #e06666;
      }
    }
    &-edit {
      &--ok {
        background-color: #6fa8dc;
        &:hover {
          width: 2.5em;
          background-color: #9fc5e8;
        }
      }
      &--cancel {
        background-color: #ffd966;
        &:hover {
          width: 2.5em;
          background-color: #ffe599;
        }
      }
    }
  }
  .tooltip-delete {
    visibility: hidden;
    &:hover {
      visibility: visible;
    }
  }
`;

const Task = ({
  id,
  done,
  label,
  value,
  setValue,
  updateStatus,
  editMode,
  isEditing,
  editTaskLabel,
  deleteTask,
}) => {
  const idTask = `checkbox-${id}`;

  return (
    <TaskLi>
      {id === editMode ? (
        <>
          {value === "" ? (
            <form>
              <input
                type="text"
                value={value}
                placeholder={label}
                onChange={(event) => {
                  setValue(event.currentTarget.value);
                }}
              />
            </form>
          ) : (
            <form
              onSubmit={() => {
                editTaskLabel(id);
              }}
            >
              <input
                type="text"
                value={value}
                placeholder={label}
                onChange={(event) => {
                  setValue(event.currentTarget.value);
                }}
              />
            </form>
          )}

          <div className="task_buttons-group">
            {value === "" ? (
              <div
                className="task_button task_button-edit--cancel"
                onClick={() => {
                  isEditing(null);
                }}
              >
                &#10005;
              </div>
            ) : (
              <>
                <div
                  className="task_button task_button-edit--ok"
                  onClick={() => {
                    editTaskLabel(id);
                  }}
                >
                  &#8626;
                </div>
                <div
                  className="task_button task_button-edit--cancel"
                  onClick={() => {
                    isEditing(null);
                  }}
                >
                  &#10005;
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className={
              done
                ? "task_button task_button-check--ok"
                : "task_button task_button-check"
            }
            onClick={(event) => {
              updateStatus(event.currentTarget, id);
            }}
          >
            {done ? "\u2714" : ""}
          </div>
          <label
            className={done ? "label--done" : "label"}
            htmlFor={idTask}
            onClick={() => {
              isEditing(id);
            }}
          >
            {label}
          </label>
          <div className="task_buttons-group">
            <div
              className="task_button task_button-delete"
              onClick={() => {
                if (window.confirm("Supprimer ?")) {
                  deleteTask(id);
                }
              }}
            >
              &#9249; &#8709;
            </div>
          </div>
        </>
      )}
    </TaskLi>
  );
};

export default Task;
