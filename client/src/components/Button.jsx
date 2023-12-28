import styled from 'styled-components'

export const Button = styled.button`
  border: 2.5px solid var(--color-primary);
  border-radius: 5px;
  padding: 10px 15px;
  background-color: transparent;
  color: var(--color-primary);
  font-size: calc(12px + var(--std-responsive-param));
  font-weight: 500;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
  }
`
