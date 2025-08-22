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

export const StyledNoVideosFound = styled.p`
  margin-top: .5rem;
`

export const StyledCompressedFile = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem 1rem 0 1rem;
  width: 90%;
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

export const StyledCompressedFileActions = styled.div`
  display: flex;
`

export const StyledCompressedFileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  color: #333;
  width: 100%;
`;

export const FileInfoText = styled.p`
  margin: 0;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CompressionPercentage = styled.p`
  margin: auto 0;
  font-weight: bold;
  padding: .5rem;
  background-color: #1e90ff;
  color: #fff !important;
  border-radius: 1rem;
  font-size: 16px !important;
  width: 95%;
`;