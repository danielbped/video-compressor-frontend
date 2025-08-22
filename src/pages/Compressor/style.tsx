import styled from "styled-components";
import { DroppingAreaProps } from "../../interfaces/file-data.interface";

export const StyledCompressor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 2rem;
`;

export const StyledCompressedVideosTitle = styled.h2`
  margin-bottom: 1rem;
`

export const StyledCompressorTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
  color: #111111;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const StyledCompressorParagraph = styled.p`
  font-size: 0.95rem;
  color: #494747ff;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 90%;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1rem;
    max-width: 600px;
  }
`;

export const DroppingContent = styled.div<DroppingAreaProps>`
  transition: all 0.3s ease-in-out;
  filter: ${props => (props.isDragging ? "blur(2px)" : "none")};
  pointer-events: ${props => (props.isDragging ? "none" : "auto")};
  position: relative;
`;

export const StyledCompressorDroppingArea = styled.div<DroppingAreaProps>`
  width: 100%;
  border: ${props => (props.isDragging ? "4px dashed #0070ff" : "2px dashed #005ae1")};
  border-radius: 1rem;
  background-color: ${props => (props.isDragging ? "rgba(0, 90, 225, 0.15)" : "rgba(255, 255, 255, 0.02)")};
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
  color: #111111;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 90, 225, 0.05);
    border-color: #0070ff;
  }

  h2 {
    color: #111111;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
  }
`;


export const HiddenInput = styled.input`
  display: none;
`;
