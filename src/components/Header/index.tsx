import { useNavigate } from "react-router-dom"
import { HeaderProps } from "../../interfaces/components.interface"
import Button from "../Button"
import { StyledCompressorHeader, StyledCompressorTitle } from "./style"

const Header = (props: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <StyledCompressorHeader>
      <StyledCompressorTitle>CompactaVideos</StyledCompressorTitle>
      {props.handleLogout && props.user
      ? <div>
          <p>{ props.user.firstName } { props.user.LastName }</p>
          <Button
            title="Sair"
            onClick={props.handleLogout}
            width={10}
            color="#ffffff"
            backgroundColor="#005ae1"
          />
        </div>
      : <Button
          title="Login"
          onClick={() => navigate('/login')}
          width={10}
          color="#ffffff"
          backgroundColor="#005ae1"
        />
      }
    </StyledCompressorHeader>
  )
}

export default Header