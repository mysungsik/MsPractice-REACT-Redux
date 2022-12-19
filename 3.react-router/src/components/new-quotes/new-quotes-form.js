import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { quotesActions } from "../../store/quotes-slice";
import { Prompt, useHistory } from "react-router-dom";

const NewQuotesForm = () => {
  const [idState, setIdState] = useState("");
  const [authorState, setAuthorState] = useState("");
  const [contentState, setContentState] = useState("");
  const [focused, setFocused] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // 입력
  const idInputHandler = (e) => {
    setIdState(() => e.target.value);
  };
  // 입력
  const authorInputHandler = (e) => {
    setAuthorState(() => e.target.value);
  };
  // 입력
  const contentInputHandler = (e) => {
    setContentState(() => e.target.value);
  };
  
  // 제출 핸들러
  const submitHandler = async (e) => {
    e.preventDefault();

    const quotes = {
      id: idState,
      author: authorState,
      content: contentState,
    };

    await fetch(
      "https://react-router-project-41a4b-default-rtdb.firebaseio.com/Quotes.json",
      {
        method: "POST",
        body: JSON.stringify(quotes),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(quotesActions.addQuotes({ quotes }));

    history.replace("/quotes");
  };

  // 뒤로가기 물어보기
  const onFocusHandler = () => {
    setFocused(true);
  };

  // 제출할때는 focuse 제거하여, Prompt 안나오게
  const deleteFocusHandler = () => {
    setFocused(false);
  };

  return (
    <Fragment>
      <Prompt when={focused} message={(location) => "정말로 나가시겠습니까?"} />

      <form onFocus={onFocusHandler} onSubmit={submitHandler}>
        <div>
          <label htmlFor={"id"}> 아이디 </label>
          <input
            type={"text"}
            id={"id"}
            value={idState}
            onChange={(e) => idInputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor={"author"}> 저자 </label>
          <input
            type={"text"}
            id={"author"}
            value={authorState}
            onChange={(e) => authorInputHandler(e)}
          />
        </div>
        <div>
          <label htmlFor={"content"}> 명언 </label>
          <input
            type={"text"}
            id={"content"}
            value={contentState}
            onChange={(e) => contentInputHandler(e)}
          />
        </div>
        <div>
          <button onClick={deleteFocusHandler}> 추가하기 </button>
        </div>
      </form>
    </Fragment>
  );
};
export default NewQuotesForm;
