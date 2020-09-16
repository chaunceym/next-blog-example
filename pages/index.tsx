import React from 'react'
import png from 'assets/images/pink3.jpg'

export default function Home() {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <img src={png} alt='' />
      <style jsx>
        {`
          h1 {
            color: red;
          }
        `}
      </style>
    </div>
  )
}
