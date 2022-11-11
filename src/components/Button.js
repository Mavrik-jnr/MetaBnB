import React from "react";
import styled from "styled-components";

function Button() {
  return (
    <div>
      <StyledButton>Connect Wallet</StyledButton>
    </div>
  );
}

export default Button;

const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
`;
