import React from 'react'
import { useState } from 'react'

function Test() {
    const [inputs, setInputs] = useState({
        width: '',
        height: ''
    })

    const {width, height} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () =>{
        setInputs({
            width: '',
            height: ''
        })
    }
  return (
    <div>
        <input name="width" onChange={onChange} placeholder='width' value={width} />
        <input name="height" onChange={onChange} placeholder='height' value={height} />
        <button onClick={onReset}>초기화</button>
        <p onChange={onChange}>w: {width}, h: {height}</p>
    </div>
  )
}

export default Test