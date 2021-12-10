import React from "react";

import styled from "styled-components";

const TaskLi = styled.li`
  display: flex;
  margin: 0.5em 0;
  min-height: 4em;
  align-items: center;
  border-radius: 0.2em;
  background-color: white;
  justify-content: space-between;

  label {
    padding: 0.3em;
    max-width: 80%;
    word-break: break-word;
  }

  .label--done {
    text-decoration: line-through;
  }

  form {
    width: 100%;
    input {
      width: 95%;
      padding: 0.5em;
      min-height: 2.5em;
    }
  }

  .task_buttons-group {
    display: flex;
    flex-wrap: no-wrap;
  }

  .task_button {
    width: 2em;
    height: 4em;
    display: flex;
    cursor: pointer;
    font-size: large;
    transition: 0.25s;
    align-items: center;
    border-radius: 0.2em;
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
                deleteTask(id);
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
