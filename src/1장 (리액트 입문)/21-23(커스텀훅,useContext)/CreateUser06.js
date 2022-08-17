import React, { useContext, useRef } from 'react'
import { UserDispatch } from './Component06';
import useInputs from './useInputs';

function CreateUser06() {
  const dispatch = useContext(UserDispatch)
  const [{username, email}, onChange, reset] = useInputs({
    username:'',
    email:''
  })
  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name='username'
        placeholder='계정명'
        onChange={onChange}
        value={username}
      />
      <input
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  )
}

// [React.memo()] 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄 수 있다.
export default React.memo(CreateUser06);