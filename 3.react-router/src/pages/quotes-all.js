import AllQuotesComponent from "../components/quotes/all-quotes";
import { useDispatch, useSelector } from "react-redux";
import { getQuotesData } from "../store/quotes-actions";
import { useEffect } from "react";

const AllQuotes = () => {
  const uiState = useSelector((state) => state.uiSlice.getFetchLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotesData());
  }, [dispatch]);

  if (uiState) {
    return <p> loading</p>;
  }
  
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
