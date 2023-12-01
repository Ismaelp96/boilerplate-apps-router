import { Meta, StoryFn } from '@storybook/react'
import GameCardSlider from '.'
import { GameCardProps } from '../GameCard'
import { ReactElement } from 'react'

import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryFn | ReactElement<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
)
