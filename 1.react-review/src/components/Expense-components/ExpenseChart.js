import { useState } from "react";
import Chart from "../Chart/Chart";

//chartData 안에는, title, amount, date 가 들어있다.

function ExpenseChart(props) {
  const { chartData } = props;

  const [chart, setChart] = useState(chartData);
  return <Chart chartData={chart} />;
}
export default ExpenseChart;
