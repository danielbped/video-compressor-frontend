import styled from "styled-components";

export const StyledCompressedFilesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
  }
`;

export const StyledCompressedFile = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #111111;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-align: center;
  }

  video {
    width: 100%;
    max-height: 220px;
    border-radius: 0.5rem;
    margin-bottom: 0.8rem;
    background-color: #000;
  }

  button {
    margin-top: 0.5rem;
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;
