import styled, { css } from 'styled-components'
import { HighlightProps } from '.'
import media from 'styled-media-query'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, backgroundImage }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 23rem;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${media.greaterThan('medium')`
        height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    text-align: right;
    padding-top: 1.9rem;
    padding-right: 2.2rem;
    ${media.greaterThan('medium')`
    padding-top: 0;
    padding-right: 4.8rem;
    padding-bottom: 4.8rem;
       align-self: end;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: 1.2rem;
    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large};
        margin-bottom: 2.3rem;
    `}
  `}
`
