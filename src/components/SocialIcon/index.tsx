import { SocialIconProps } from "../../interfaces/components.interface"
import { SocialIconImage, SocialIconUrl } from "./style"

const SocialIcon = (props: SocialIconProps) => {
  return (
    <SocialIconUrl href={props.link} target="_blank" rel="noopener noreferrer">
      <SocialIconImage
        src={props.iconUrl}
        alt={props.alt}
      />
    </SocialIconUrl>
  )
}

export default SocialIcon