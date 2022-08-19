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
          <div key={index}>
            <User user={user}/>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(UserList06);