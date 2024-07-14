import React from 'react'
import '../../../public/styles/wcu.css'

const Item = ({name, desc}) => {
  return (
    <div className='wcu-item'>
        <div className="name">{name}</div>
        <div className="desc">{desc}</div>
    </div>
  )
}

export default Item