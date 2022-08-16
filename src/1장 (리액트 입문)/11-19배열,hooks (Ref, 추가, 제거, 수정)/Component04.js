import React, { useRef } from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중...');
  return users.filter(user => user.active).length;
}

function Component04() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });
  const {username, email} = inputs;
  const onChange = useCallback( e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  },[inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4); // useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 된다. 그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 된다.
  
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, user]);
    // setUsers(users.concat(user)); // 스프레드 연산자 대신 concat을 사용하는 방법도 있다.(위와 동일)

    setInputs({
      username:'',
      email:''
    });
    nextId.current += 1
  }

  const onRemove = useCallback( id => {
     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  },[]);

  const onToggle = useCallback( id => {
    setUsers(users.map(user => 
      user.id === id ? {...user, active: !user.active} : user
      ));
  },[]);
  const count = useMemo(() => countActiveUsers(users), [users]) ;
  //useMemo(fn, []) 두번째 인수에 넣어준 배열의 값이 바뀔때만 함수가 실행된다. 그렇지 않다면 이전의 값을 재사용한다.

  return (
    <div>
      <hr />
      <CreateUser
       username={username}
       email={email}
       onChange={onChange}
       onCreate={onCreate}
      />
      <UserList 
      users={users}
      onRemove={onRemove}
      onToggle={onToggle}/>
      <div>활성사용자 수: {count} </div>
    </div>
  )
}

export default Component04