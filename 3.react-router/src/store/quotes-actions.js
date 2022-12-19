import { quotesActions } from "./quotes-slice";

export const getQuotesData = () => {
  return async (dispatch) => {
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

    dispatch(quotesActions.replaceQuotes(allQuotes));
  };
};
