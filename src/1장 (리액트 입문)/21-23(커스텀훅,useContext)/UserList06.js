import React from 'react'
import { useContext } from 'react';
import { UserDispatch } from './Component06';

const User = React.memo(function User({ user }){
  const dispatch = useContext(UserDispatch);

    return (
      <div>
        <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
          }}
          onClick={()=> {
            dispatch({type: 'TOGGLE_USER', id: user.id})
          }}
        >
          {user.username}
        </b> 
        <span>({user.email})</span>
        <button onClick={()=> {
          dispatch({type: 'REMOVE_USER', id: user.id})
          }}>삭제</button>
      </div>
    );
});

function UserList06({users}) {
  return (
    <div>
        {users.map( (user, index) =>{
        return (
          // 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하면 된다.
          <div key={index}>
            <User user={user}/>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(UserList06);