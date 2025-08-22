import styled from "styled-components";

export const StyledCompressorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  background-color: #010c13;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const StyledCompressorTitle = styled.h1`
  color: #ffffff;
`;

export const StyledUserName = styled.p`
  color: #ffffff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledUserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
`;
