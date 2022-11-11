import styled from "styled-components";

function Button({ children, type }) {
  return (
    <div>
      {type === "primary" ? (
        <PrimaryButton>{children}</PrimaryButton>
      ) : (
        <SecondaryButton>{children}</SecondaryButton>
      )}
    </div>
  );
}

export default Button;

const PrimaryButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 12px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--white);
  color: var(--primary);
`;
