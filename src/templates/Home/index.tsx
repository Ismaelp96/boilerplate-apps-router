'use client'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Heading from '@/components/Heading'

import { BannerProps } from '@/components/Banner'
import { GameCardProps } from '@/components/GameCard'
import Highlight, { HighlightProps } from '@/components/Highlight'
import BannerSlider from '@/components/BannerSlider'
import GameCardSlider from '@/components/GameCardSlider'

// import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
      <GameCardSlider items={newGames} color="black" />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighlight} />
      <GameCardSlider items={upcommingMoreGames} />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
