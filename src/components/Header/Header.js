import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'

const Header = () => {

  const { cartList } = useSelector((state) => state.cart)

  const totalCount = cartList.reduce((acc, value) =>( acc += value.count), 0)
  return (
    <header className='header'>
      Rafnas Media
      <div className='cart-icon'>cartIcon <span>{totalCount}</span> </div>

    </header>
  )
}

export default Header