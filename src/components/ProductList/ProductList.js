import React, { useMemo, useState } from 'react'
import products from '../../api/products.json'
import './ProductList.css'
import { useDispatch, useSelector, UseSelector } from 'react-redux'
import cart, { decrement, increment } from '../../redux/cart'

const ProductList = () => {
  const [count, setCount] = useState(0)
  const { cartList } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  console.log(cartList, "CART LISR ONPRODCUS OLIS");

  const cartCount = (prodId)=> cartList.find((ele) => ele.id === prodId)?.count

  return (
    <section className='container'>
      {products?.map((item) => (
        <div className='main-container'>
          <h3>{item.title}</h3>
          <button onClick={() => dispatch(decrement(item))}>-</button>
          <span>
            {cartCount(item.id)}
          </span>
           <button onClick={() => dispatch(increment(item))}>+</button>
        </div>
      ))}
    </section>
  )
}

export default ProductList  