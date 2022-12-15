// 리팩토링 해야 하는 것들
//  1. useState
//  2. validation
//  3. validation 하기 위한, inputHandelr 함수  => 아웃소싱해서 호출할것
//  4. validation 하기 위한, isTouchedHandler 함수  => 아웃소싱해서 호출할것

// return 하는 상태
//  1. 입력되는 값의 상태
//  2. 에러가 발생했느냐?
//  3. 리팩토링 할 함수들 (inputHandelr,isTouchedHandler )  => 아웃소싱해서 호출하므로

// 부모로부터 받아야 하는 값들
//  1. validation 로직

import { useState } from "react";

function useInput(inValidationCheck) {
  const [inputValue, setInputValue] = useState(); // 입력되는 값의 상태
  const [inputIsTouched, setInputIsTouched] = useState(false); // touched 되어있는지의 상태

  const inputIsInvalid = inValidationCheck(inputValue); // inputValue 를 체크해보니, invalid 한 상태냐? ***
  const hasError = inputIsTouched && inputIsInvalid; // 터치 햇는데, invalid 한 상태냐? => 에러발생

  // 입력값 받기위한 함수       ==>  이 커스텀훅을 사용하는곳에서, 호출가능하다.
  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  // 터치되었는지 확인하는 함수     ==>  이 커스텀훅을 사용하는곳에서, 호출가능하다.
  function inputTouchHandler() {
    setInputIsTouched(true);
  }

  return {
    inputValue,
    inputIsTouched,
    hasError,
    inputHandler,
    inputTouchHandler,
  };
}
export default useInput;

// inputValue 를 체크해보니, invalid 한 상태냐? ***
//  : 반드시, 이 커스텀 훅 안에 있는 value 를 사용해야한다.
//  : 그래야 이 커스텀 훅을 여러번 사용했을때, 서로 다른 "완전히 다른 value 들을 넣을 수 있으므로"
//  : 실제 실행장소는, 부모이므로, [이 함수 내부의 값을 사용하기 위해 함수형으로 넣는다.]
