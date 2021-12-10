import React from "react";

import styled from "styled-components";

const CounterDiv = styled.div`
  padding: 1em 0;
  color: #303030;
  font-size: large;
  text-align: left;
  border-bottom: 1px solid #303030;
`;

const Counter = ({ nbTasks }) => (
  <CounterDiv className="counter_container">
    {nbTasks === 0 && "Pas de tâche en cours"}
    {nbTasks === 1 && "1 tâche en cours"}
    {nbTasks > 1 && `${nbTasks} tâches en cours`}
  </CounterDiv>
);

export default Counter;
