import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined'
import { Close as CloseIcon } from '@styled-icons/material-outlined'

import Logo from '../../components/Logo'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
