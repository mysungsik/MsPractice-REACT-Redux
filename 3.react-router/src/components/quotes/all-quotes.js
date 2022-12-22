import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

// 0. sort 함수를 정의한다. (컴포넌트 함수 밖에 : 그저 헬퍼 함수일 뿐이므로)
const reArrangeQuotes = (quotes, isAscending) => {
  return quotes.sort((A, B) => {
    if (isAscending) {
      return A.content > B.content ? 1 : -1;
    } else {
      return B.content > A.content ? 1 : -1;
    }
  });
};

const AllQuotesComponent = () => {
  const allQuotesState = useSelector((state) => state.quotesSlice.allQuotes);

  const history = useHistory();
  const location = useLocation();

  const allQuotesData = [...allQuotesState];

  const queryParams = new URLSearchParams(location.search); // 1. 쿼리 파라미터 빼온다.
  const arrageRule = queryParams.get("arrangeRule"); // 2. 쿼리 파라미터의 "값" 을 뺀다.

  const isAscending = arrageRule === "asc"; // 3. 맞다면, 오름차순정렬

  reArrangeQuotes(allQuotesData, isAscending); // 4. 정의한 함수를 사용한다.

  const arrangeHandler = () => {
    history.push("/quotes?arrangeRule=" + (isAscending ? "desc" : "asc")); // 0.버튼을 누르면, 쿼리파라미터 생성
  };

  const quotesComponents = allQuotesData.map((item) => (
    <li key={item.id}>
      <div>
        <h3>{item.content}</h3>
        <p>{item.author}</p>
      </div>
      <div>
        <Link to={`/quotes/${item.id}`}> 큰 화면 보기</Link>
      </div>
    </li>
  ));

  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={arrangeHandler}>
          {isAscending ? "내림차순" : "오름차순"}
        </button>
      </div>
      <ul>{quotesComponents}</ul>
    </div>
  );
};

export default AllQuotesComponent;
