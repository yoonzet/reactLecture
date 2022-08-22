// 8. input 상태 관리하기
// https://react.vlpt.us/basic/08-manage-input.html

import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Component03() {
  const [inputs, setInputs] = useState({
    // input값이 여러개일때는 객체로 관리한다.
    name: "",
    nickName: "",
  });

  const nameInput = useRef();

  const { name, nickName } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs,
      [name]: value,
      // 만약에 inputs[name] = value 이런식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않는다.

      // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 된다.
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });

    nameInput.current.focus(); // .current는 우리가 원하는 DOM을 가르키게 된다.
  };

  return (
    <div>
      <hr />

      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
          ref={nameInput}
        />
        <input
          name="nickName"
          placeholder="닉네임"
          onChange={onChange}
          value={nickName}
        />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: </b>
          {name} ({nickName})
        </div>
      </div>
    </div>
  );
}

export default Component03;
