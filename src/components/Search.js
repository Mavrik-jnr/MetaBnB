import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { PrimaryButton } from "./Button";

function Search() {
  const navigate = useNavigate();

  return (
    <>
      <InputWrapper>
        <Input type="text" placeholder="Search for location" />
        <SearchButton onClick={() => navigate("/place-to-stay")}>
          Search
        </SearchButton>
      </InputWrapper>
    </>
  );
}

export default Search;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  width: 50%;
  outline: none;
  border: 1px solid #a3a3a3;
  border-radius: 8px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 1rem;
  font-size: 1rem;
  &::placeholder {
    color: #b8b8b8;
  }
  @media screen and (max-width: 1175px) {
    flex: 1;
  }
`;
const SearchButton = styled(PrimaryButton)`
  border: 8px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  width: 30%;
`;
