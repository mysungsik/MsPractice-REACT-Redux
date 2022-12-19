import { Link, Route, useRouteMatch, useLocation } from "react-router-dom";
import QuotesComment from "./quotes-comment";
import styles from "./quotes-detail.module.css";
import { useSelector } from "react-redux";

const QuotesDetailComponent = (props) => {
  const quoteState = useSelector((state) => state.quotesSlice.allQuotes);
  const allQuotesData = [...quoteState];
  const { quotesId } = props;
  const match = useRouteMatch();
  const location = useLocation();

  console.log(match);
  console.log(location);

  const selectedQuote = allQuotesData.find((item) => item.id === quotesId);

  if (!selectedQuote) {
    return <p>you have wrong URL</p>;
  }

  return (
    <div>
      <div className={styles.title}>
        <h1>명언 디테일</h1>
        <p> 명언 ID : {quotesId}</p>
      </div>
      <main>
        <h2> {selectedQuote.content}</h2>
        <p> {selectedQuote.author}</p>
      </main>
      <div>
        <Route exact path={`${match.url}`}>
          <Link to={`${match.url}/comment`}> 코멘트 열기 </Link>
        </Route>
      </div>
      <div className={styles.comment}>
        <Route path={`${match.url}/comment`}>
          <QuotesComment quotesId={quotesId} />
        </Route>
      </div>
    </div>
  );
};

export default QuotesDetailComponent;
