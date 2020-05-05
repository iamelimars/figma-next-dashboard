import React from "react";
import styled from "styled-components";

import Sidebar from "../components/Sidebar/Sidebar";
const Title = styled.h1`
  font-size: 50px;
  /* color: ${({ theme }) => theme.colors.primary}; */
`;

export default () => (
  <div>
    <Sidebar />
  </div>
);
