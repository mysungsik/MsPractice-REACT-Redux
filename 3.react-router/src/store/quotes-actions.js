import { quotesActions } from "./quotes-slice";
import { uiActions } from "./ui-slice";

export const getQuotesData = () => {
  return async (dispatch) => {
    dispatch(uiActions.fetchLoading(true)); // [로딩]시작하면 로딩

    const fetchData = async () => {
      const response = await fetch(
        "https://react-router-project-41a4b-default-rtdb.firebaseio.com/Quotes.json"
      );

      const responseData = await response.json();

      // 파이어베이스 에서 오는 것 재정리
      const refinedData = [];

      for (const key in responseData) {
        refinedData.push({
          id: responseData[key].id,
          content: responseData[key].content,
          author: responseData[key].author,
        });
      }

      return refinedData;
    };

    const allQuotes = await fetchData();
    dispatch(uiActions.fetchLoading(false)); // [로딩]끝나면 로딩 끝

    dispatch(quotesActions.replaceQuotes(allQuotes));
  };
};
