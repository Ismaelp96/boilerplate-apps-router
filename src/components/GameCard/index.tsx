import Image from 'next/image'
import * as S from './styles'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from '../Button'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={img} alt={title} width={300} height={140} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to Wishlist" />
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard
