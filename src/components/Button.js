import styled from "styled-components";

function Button({ children, type, setModal }) {
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

export const PrimaryButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
`;
const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--white);
  color: var(--primary);
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      91.47deg,
      #dc3e88 18.25%,
      #b840ae 43.34%,
      #843fe8 78.18%
    );
    color: white;
  }
`;
