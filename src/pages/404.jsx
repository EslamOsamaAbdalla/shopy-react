import React from 'react'
import { Link } from 'react-router-dom'
import Shop from './shop'
import "./404.css"
function Nopage() {
  return (
    <div className='error-page'>
      <h2>page not found</h2>
      <h3>404</h3>
        <Link to={"/"} element={<Shop/>}>
          back to home
        </Link>
    </div>
  )
}
export default Nopage