import React from 'react'
import '../../styles/components/common/title.css'

const Title = ({title, subTitle}) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <span>{subTitle}</span>
    </div>
  )
}

export default Title