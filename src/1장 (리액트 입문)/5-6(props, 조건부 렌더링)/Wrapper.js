import React from 'react'

function Wrapper({children}) {
    const style = {
        backgroundColor: '#eee',
        border: '1px solid gray'
    }
  return (
    <div style={style}>
        {children} 
    </div>
  )
}

export default Wrapper;