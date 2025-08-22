import styled from "styled-components";

export const StyledFileListToUpload = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: rgb(223 218 218 / 25%);
  text-align: left;

  p {
    color: #494747ff;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    word-break: break-word;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const StyledFileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255,0.05);
  border-radius: 0.6rem;
  padding: 0.8rem 1rem;

  span {
    color: #111111;
    font-size: 0.95rem;
    word-break: break-word;
    flex: 1;
    margin-right: 1rem;
  }

  button {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

