import styled from "styled-components"

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > div:first-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;