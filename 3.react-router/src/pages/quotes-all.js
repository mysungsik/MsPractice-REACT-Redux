import AllQuotesComponent from "../components/quotes/all-quotes";
import { useSelector, useDispatch } from "react-redux";
import { getQuotesData } from "../store/quotes-actions";
import { useEffect } from "react";

const AllQuotes = () => {
  const quotesState = useSelector((state) => state.quotesSlice.allQuotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotesData());
  }, [dispatch]);

  return (
    <div>
      <h1>명언들</h1>
      <main>
        <AllQuotesComponent />
      </main>
    </div>
  );
};

export default AllQuotes;
