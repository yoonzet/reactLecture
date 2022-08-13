import React from 'react'

function Hello({color, hello, isSpecial}) {
  return (
    <div style={{color:color}}>

        {/* 조건부 렌더링(결과는 같음) */}
        {isSpecial ? <b>*</b> : null} {/* 삼항연산자사용 */}
        {isSpecial && <b>*</b> } {/* &&사용 */}


        {hello}    
    </div>
  )
}

Hello.defaultProps = {
    hello: '안녕(디폴트 프롭스)'
}


export default Hello;