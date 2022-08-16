import React from 'react'
import { useState } from 'react'

function Test() {
    const [input, setInput] = useState({
        width: '',
        height: ''
    });
    const {width, height} = input;

    const onChange = e => {
        const {name, value} = e.target
        setInput({
            ...input,
            [name]:value
        })
    }

    const onClick = () =>{
        setInput({
            width: '',
            height: ''
        })
    }
    
  return (
    <div>
        <hr />
        <p>연습</p>
        <input name='width' onChange={onChange} value={width}/>
        <input name='height' onChange={onChange} value={height}/>
        <button onClick={onClick}>초기화</button>
        <p onChange={onChange}>w:{width} , h: {height}</p>
    </div>
  )
}

export default Test