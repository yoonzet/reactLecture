import React from 'react'
import { useEffect } from 'react';

function Timer() {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log('타이머 실행중')
    },1000)

    return()=>{
      clearInterval(timer);
      console.log('타이머 종료')
    }
  },[])

  return (
    <div>
        <p>타이머가 시작됩니다.</p>
    </div>
  )
}

export default Timer;