import React from "react";

import styled from "styled-components";

const FormDiv = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    input {
      width: 100%;
      padding: 1em;
      outline: none;
      color: #333333;
      min-height: 1em;
      font-size: x-large;
      border-style: none;
      background-color: #b6d7a870;

      @media (min-width: 769px) {
        min-height: 2em;
      }
    }

    .submit-button {
      width: 3em;
      display: flex;
      color: #333333;
      cursor: pointer;
      transition: 0.25s;
      font-size: x-large;
      align-items: center;
      justify-content: center;
      background-color: #674ea7;

      &:hover {
        width: 3.5em;
        background-color: #8e7cc3;
      }
    }
  }
`;

const Form = ({ manageSubmit, value, setValue }) => (
  <FormDiv>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        manageSubmit();
      }}
    >
      <input
        required
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
        placeholder="Ajouter une tâche"
      />

      {value === "" ? (
        <div className="submit-button">&#10010;</div>
      ) : (
        <div
          className="submit-button"
          onClick={() => {
            manageSubmit();
          }}
        >
          &#10010;
        </div>
      )}
    </form>
  </FormDiv>
);

export default Form;
