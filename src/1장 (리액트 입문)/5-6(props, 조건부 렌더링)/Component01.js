// 5. props 를 통해 컴포넌트에게 값 전달하기
// https://react.vlpt.us/basic/05-props.html

import React from 'react'
import Hello from './Hello';
import Wrapper from './Wrapper';

function Component01() {
    const style = {
        backgroundColor: 'pink' 
      }
  return (
    <Wrapper>
    <div className="style" style={style}>
      <Hello
        hello = '헬로'
        color = 'red'
        isSpecial = {true} //값을 생략해도(isSpecial만 작성해도) true로 인식한다.
      
      />
      <Hello />
    </div>
    </Wrapper>
  )
}

export default Component01;