import CompressImage from '../../assets/compress-image.svg'
import { StyledSideSection, StyledSideSectionImage, StyledSideSectionTitle } from './style'

const SideSection = () => {
  return (
    <StyledSideSection>
      <StyledSideSectionTitle>CompactaVideos</StyledSideSectionTitle>
      <StyledSideSectionImage src={ CompressImage } alt="Logo do CompactaVideos"/>
    </StyledSideSection>
  )
}

export default SideSection