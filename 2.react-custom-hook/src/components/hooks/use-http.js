import { useState } from "react";

function useHttp(fecthConfig, applyData) {
  // 이름에는, 반드시 "use"
  // fetchConfig 에는, url, method, headers, body 가 필요할 것이다.

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // "task" 를 담은 "State" 는 삭제

  async function sendRequest() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(fecthConfig.url, {
        method: fecthConfig.method ? fecthConfig.method : "GET", //  fecthConfig 객체에서 뽑은 method ...
        body:
          fecthConfig.body !== null ? JSON.stringify(fecthConfig.body) : null,
        headers: fecthConfig.headers !== null ? fecthConfig.headers : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const responseData = await response.json(); // data 까지만 뽑고, 추후처리는 각 컴포넌트마다 다르게 해야하므로 이하 삭제

      applyData(responseData);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }

  return {
    isLoading, // useHttp 훅을 사용하면, 결과적으로 반환되는 "State" 와, "값"
    error,
    sendRequest, // sendRequest 를 호출하면, responseData 를 파라미터로, fetch 한 값을 사용할 수 있다.
  };
}

export default useHttp;
