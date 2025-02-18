/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const TopCards = ({data}) => {

    const {imgSrc, cardTitle, count, chartImg, profit, loss} = data;

  return (
    <div className='flex'>
        <div>
            <img src={imgSrc} alt='image-logo' className='w-full bg-amber-800'/>
        </div>
        <div className='bg-green-200'>
            <p className=''>{cardTitle}</p>
            <p className='text-2xl'>{count}</p>
        </div>
        <div className='bg-red-400'>
        <img src={chartImg} alt='image-logo' className='w-full'/>
        <p>{profit || loss}%</p>
        </div>
    </div>
  )
}

export default TopCards