import React from 'react'
import { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  // useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다.
    useEffect(() => {
      console.log('화면나옴')
      // console.log(user)
      return () => {
        console.log('컴포넌트 사라짐')
        // console.log(user)
      }
    },[user]) // deps(배열)에는 useEffect 안에서 사용하는 상태나, props를 넣는다

// deps 에 특정값을 넣게 되면, 컴퍼넌트가 마운트 될 때, 지정한 값이 업데이트 될 때 useEffect 실행된다.
// deps에 값이 없다면 useEffect가 최신 값을 가리키지 않게 된다.
// deps에 값이 없다면 컴포넌트가 리렌더링 될 때마다 호출이 된다.
// deps에 값을 넣는것을 기본이라고 생각하는게 좋다.

    return (
      <div>
        <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
          }}
          onClick={()=> onToggle(user.id)}
        >
          {user.username}
        </b> 
        <span>({user.email})</span>
        <button onClick={()=> onRemove(user.id)}>삭제</button>
      </div>
    );
  }

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
        {users.map( (user, index) =>{
        return (
          // 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하면 된다.
          <div key={index}>
            <User user={user} onRemove={onRemove} onToggle={onToggle} />
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(UserList);