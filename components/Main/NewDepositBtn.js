import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../context/themeContext";

const AddButton = styled.a`
  background-color: ${({ theme }) => theme.colorGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: absolute;
  top: 6rem;
  right: 7rem;
  cursor: pointer;
  transition: all ease-in-out 300ms;
`;

const AddIcon = styled.span`
  color: #ffffff;
  font-size: 36px;
`;

const NewDepositBtn = () => {
  const { openDepositModal } = useThemeContext();

  return (
    <AddButton onClick={() => openDepositModal()}>
      <AddIcon
        className="iconify"
        data-inline="false"
        data-icon="mdi-light:plus"
      ></AddIcon>
    </AddButton>
  );
};

export default NewDepositBtn;
