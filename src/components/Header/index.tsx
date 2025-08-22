import { useNavigate } from "react-router-dom"
import { HeaderProps } from "../../interfaces/components.interface"
import Button from "../Button"
import {
  StyledCompressorHeader,
  StyledCompressorTitle,
  StyledUserName,
  StyledUserSection
} from "./style"

const Header = (props: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <StyledCompressorHeader>
      <StyledCompressorTitle>CompactaVideos</StyledCompressorTitle>
      {props.handleLogout && props.user
      ? <StyledUserSection>
          <StyledUserName>{ props.user.firstName } { props.user.lastName }</StyledUserName>
          <Button
            title="Sair"
            onClick={props.handleLogout}
            width={50}
          />
        </StyledUserSection>
      : <Button
          title="Login"
          onClick={() => navigate('/login')}
          width={10}
        />
      }
    </StyledCompressorHeader>
  )
}

export default Header