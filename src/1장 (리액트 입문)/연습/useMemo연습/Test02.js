import React, { useMemo } from 'react'
import { useState } from 'react';


function Test02() {

    const hardCal = (num) => {
        for(let i = 0; i<999999009; i++){}
        return num + 10000;
    }
    const easyCal = (num) => {
        return num + 1;
    }
    
    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);

    const hardSum = useMemo(() => {
        return hardCal(hardNum)
    }
    ,[hardNum])
    const easySum = easyCal(easyNum)
    

  return (
    <div>
        <hr />
        <p>연습(useMemo)</p>

        <p>어려운 계산기</p>
            <input 
                type="number" 
                onChange={(e) => {setHardNum(parseInt(e.target.value))}} 
                value={hardNum} />
        <span> + 10000 = {hardSum}</span>

        <p>쉬운 계산기</p>
            <input 
                type="number" 
                onChange={(e) => {setEasyNum(parseInt(e.target.value))}} 
                value={easyNum} />
        <span> + 1 = {easySum}</span>
    </div>
  )
}

export default Test02;