import React, { useReducer, useMemo } from 'react';
import CreateUser06 from './CreateUser06';
import UserList06 from './UserList06';
import produce from 'immer';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return produce(state, draft => { //immer라이브러리 사용. 지금 코드에선 아래 주석처리한 코드가 좀더 간결하나 연습을 위해 사용.
        draft.users.push(action.user);
      }) 
      // return {
      //   users: state.users.concat(action.user)
      // };
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      })
      // return {
      //   users: state.users.map(user =>
      //     user.id === action.id ? { ...user, active: !user.active } : user
      //   )
      // };
    case 'REMOVE_USER':
      return {
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function Component06() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <hr />
      <p>Component06[커스텀훅]</p>
        <CreateUser06 />
        <UserList06 users={users} />
        <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default Component06;