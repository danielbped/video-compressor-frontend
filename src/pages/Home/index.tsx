import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Header from "../../components/Header"
import CompressSVG from "../../components/CompressSVG"
import {
  StyledCallToAction,
  StyledHeading,
  StyledParagraph,
  StyledTextContainer,
  StyledHome,
  StyledCallToActionContainer,
  StyledCallToActionParagraph,
  StyledHomeBody
} from "./style"
import Footer from "../../components/Footer"

const Home = () => {
  const navigate = useNavigate()
  return (
    <StyledHome>
      <Header />
      <StyledTextContainer>
        <StyledHeading>Comprima seus vídeos em segundos sem perder qualidade</StyledHeading>
        <StyledParagraph>Reduza o tamanho dos seus arquivos de vídeo e economize espaço sem comprometer a resolução.</StyledParagraph>
        <Button
          title="Começar Agora"
          onClick={() => navigate('/login')}
          width={25}
          color="#ffffff"
          backgroundColor="#005ae1"
        />
        <StyledCallToActionContainer>
          <StyledCallToActionParagraph>Já tem uma conta?
            <StyledCallToAction onClick={() => navigate('/login')}>Faça login</StyledCallToAction>
          </StyledCallToActionParagraph>
          <StyledCallToActionParagraph>Não tem uma conta?
            <StyledCallToAction onClick={() => navigate('/register')}>Registre-se</StyledCallToAction>
          </StyledCallToActionParagraph>
        </StyledCallToActionContainer>
      </StyledTextContainer>
      <StyledHomeBody>
        <div>
          <StyledHeading color="#333333" >CompactaVideos</StyledHeading>
          <StyledParagraph color="#333333" >O melhor serviço de compressão de vídeos online.</StyledParagraph>
          <StyledParagraph color="#333333" >Compacte seus vídeos de forma rápida e fácil, sem complicações.</StyledParagraph>
          <StyledParagraph color="#333333" >Experimente agora e veja a diferença!</StyledParagraph>
        </div>
        <CompressSVG />
      </StyledHomeBody>
      <Footer />
    </StyledHome>
  )
}

export default Home