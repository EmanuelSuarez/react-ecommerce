import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className='text-center my-5'>Tu carrito esta vacio. <Link className='text-blue-900' to={'/'}>Mira nuestros productos</Link></div>
  )
}
