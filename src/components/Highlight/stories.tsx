import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de de volta!',
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/hero-highlight.jpg'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {}

export const WithFloatImage: StoryObj<HighlightProps> = {}

WithFloatImage.args = {
  floatImage: '/img/red-dead-float'
}
