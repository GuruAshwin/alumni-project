"use client"
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './convo.css'

export default function ConvoScreen(){
  return (
    <div className='convo-container'>
      <div className='img-container'>
      <a  href='./Convocation/convoone'><img src='/convocation/2017/IMG_0361.jpg'/></a>
        <a className='convo-label' href='./Convocation/convoone'>CONVOCATION 2017</a>
      </div>
      <div className='img-container'>
      <a  href='./Convocation/convotwo'><img src='/convocation/2018/IMG_4608.JPG'/></a>
        <a className='convo-label' href='./Convocation/convotwo'>CONVOCATION 2018</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convothree'><img src='/convocation/2019/SBUV2524.JPG'/></a>
        <a className='convo-label' href='./Convocation/convothree'>CONVOCATION 2019</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convofour'><img src='/convocation/2021/_AMS3257.jpg'/></a>
        <a className='convo-label' href='./Convocation/convofour'>CONVOCATION 2021</a>
      </div>
      <div className='img-container'>
      <a href='./Convocation/convofive'><img src='/convocation/2022/FT2A9762.JPG'/></a>
        <a className='convo-label' href='./Convocation/convofive'>CONVOCATION 2022</a>
      </div>
      <div className='img-container'>
      <a  href='./Convocation/convosix'><img src='/convocation/2023/9Y8A8766.jpg'/></a>
        <a className='convo-label' href='./Convocation/convosix'>CONVOCATION 2023</a>
      </div>
    </div>
  )
}