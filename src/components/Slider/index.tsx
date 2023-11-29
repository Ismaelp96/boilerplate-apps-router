import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type sliderSettings = Settings

export type sliderProps = {
  children: React.ReactNode
  settings: sliderSettings
}

const Slider = ({ children, settings }: sliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
