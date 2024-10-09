import React from 'react'
import Button from '../Buttons/Button';
function cart(onCheckout:String) {
  return (
    <Button onClick={onCheckout}/>
  )
}

export default cart
