import styled from "styled-components";

export const StyledCallToAction = styled.p`
  cursor: pointer;
  color: #eff2f9;
  opacity: 0.8;
  margin-left: .3rem;
  text-decoration: underline;
`

export const StyledHeading = styled.h1<{ color?: string }>`
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.2;
  color: ${props => props.color ? props.color : '#eff2f9'};
  width: 100%;
  margin: auto;
  margin-bottom: 2rem;
`

export const StyledParagraph = styled.p<{ color?: string }>`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.25;
  color: ${props => props.color ? props.color : '#eff2f9'};
  width: 100%;
  margin: auto;
  margin-bottom: 2rem;
`

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
  width: 100%;
  background-color: #010c13;
`

export const StyledHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const StyledCallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
`

export const StyledCallToActionParagraph = styled.p`
  display: flex;
  color: #eff2f9;
  font-size: .8rem;
  margin-bottom: .3rem;
`

export const StyledHomeBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`