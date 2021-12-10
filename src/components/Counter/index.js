import React from "react";

import styled from "styled-components";

const CounterDiv = styled.div`
  padding: 1.5em 0;
  color: #444444;
  font-size: larger;
  text-align: left;
  border-bottom: 1px solid #444444;
`;

const Counter = ({ nbTasks }) => (
  <CounterDiv className="counter_container">
    {nbTasks === 0 && "Pas de tâche en cours"}
    {nbTasks === 1 && "1 tâche en cours"}
    {nbTasks > 1 && `${nbTasks} tâches en cours`}
  </CounterDiv>
);

export default Counter;
