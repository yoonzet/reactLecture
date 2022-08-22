import React from "react";
import Component01 from "./5-6(props, 조건부 렌더링)/Component01";
import Component02 from "./7(카운터만들기)/Component02";
import Component03 from "./8-10(input상태관리, ref)/Component03";
import Test from "./8-10(input상태관리, ref)/Test";
import Component04 from "./11-19배열,hooks (Ref, 추가, 제거, 수정)/Component04";
import Test01 from "./연습/useEffect연습/Test01";
import Test02 from "./연습/useMemo연습/Test02";
import Component05 from "./20(useReducer)/Component05";
import Component06 from "./21-23(커스텀훅,useContext)/Component06";

function Basic() {
  return (
    <>
      <Component01 />
      <Component02 />
      <Component03 />
      <Test />
      <Component04 />
      <Test01 />
      <Test02 />
      <Component05 />
      <Component06 />
    </>
  );
}

export default Basic;
