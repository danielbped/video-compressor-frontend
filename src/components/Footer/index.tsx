import SocialIcon from "../SocialIcon"
import {
  StyledCompressorFooter,
  StyledCompressorTitle,
  StyledFooterParagraph,
  StyledCompressorFooterMain,
  StyledFooterSocial,
  StyledSocialIcons
} from "./style"

const Footer = () => {
  return (
    <StyledCompressorFooter>
      <StyledCompressorFooterMain>
        <StyledCompressorTitle>CompactaVideos</StyledCompressorTitle>
        <StyledFooterSocial>
          <StyledFooterParagraph>FOLLOW ME!</StyledFooterParagraph>
          <StyledSocialIcons>
            <SocialIcon
              iconUrl="https://cdn.prod.website-files.com/67642627d63962d4611d371c/67ab6f5946a20fc65c7ad3a3_skill-icons_linkedin.svg"
              alt="LinkedIn Icon"
              link="https://linkedin.com/in/danielbped"
            />
            <SocialIcon
              iconUrl="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
              alt="GitHub Icon"
              link="https://github.com/danielbped"
            />
          </StyledSocialIcons>
        </StyledFooterSocial>
      </StyledCompressorFooterMain>
      <StyledFooterParagraph>Copyright © 2025 danielbped. All rights reserved</StyledFooterParagraph>
    </StyledCompressorFooter>
  )
}

export default Footer