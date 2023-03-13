import React, { useState } from 'react'
import "./style.css"

const UseState = () => {
    // const initialdata = 0
    const [myNum,setMyNum]=useState(0)
  return (
    <>
      <div className='center_div'>
        <p>
            {myNum}
        </p>
        <div className='button2' onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={()=>myNum > 0 ? setMyNum(myNum-1) : alert("Value below 0 not allowed")}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  )
}

export default UseState
