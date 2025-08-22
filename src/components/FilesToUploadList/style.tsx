import styled, { keyframes } from "styled-components";

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

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const StyledLoader = styled.div`
  font-size: 0.875rem;
  color: #555;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    #eee 25%,
    #ddd 50%,
    #eee 75%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

export const StyledLoadingBar = styled.div`
  flex: 1;
  margin-left: 1rem;
  height: 6px;
  border-radius: 4px;
  background: #e0e0e0;
  overflow: hidden;
  position: relative;

  .progress {
    position: absolute;
    left: -40%;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, #4cafef, #2196f3);
    animation: loading 1s infinite;
  }

  @keyframes loading {
    0% { left: -40%; }
    50% { left: 100%; }
    100% { left: -40%; }
  }
`;

export const StyledProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4cafef, #2196f3);
  transition: width 0.2s ease;
`;