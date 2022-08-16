import React from 'react'
import { useState } from 'react';
import Timer from './Timer';

function Test01() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
        <hr />
        <p>연습(useEffect)</p>
        {showTimer && <Timer />}
        <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}

export default Test01;