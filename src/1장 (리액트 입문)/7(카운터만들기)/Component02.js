// 7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기
// https://react.vlpt.us/basic/07-useState.html

import React from "react";
import { useState } from "react";

function Component02() {
  //number은 현재상태, setNumber을 setter함수이다.
  const [number, setNumber] = useState(0);

  // 아래와 동일하다. 위는 비구조화 할당을 이용해 각 원소를 추출한 것이다.
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  const onIncrese = () => {
    // setNumber(number + 1)
    setNumber((prevNum) => prevNum + 1); // 함수형 업데이트(최적화를 해준다)
  };
  const onDecrese = () => {
    setNumber(number - 1);
    setNumber((prevNum) => prevNum - 1);
  };
  return (
    <div>
      <p>[카운터만들기]</p>
      <h1>{number}</h1>
      <button onClick={onIncrese}>+1</button>
      <button onClick={onDecrese}>-1</button>
    </div>
  );
}

export default Component02;
