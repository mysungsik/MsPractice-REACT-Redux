import styles from "./Chart.module.css";
import ChartBar from "./Chart-bar";

function Chart(props) {
  // 밸류, 레이블 을 주고 넘김
  // 밸류 => App.js, or 상위개체 로부터

  const { chartData } = props; //chartData 안에는, title, amount, date 가 들어있다.
  const months = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  // months 의 value 를, 각 달의 총 amount 의 합으로 바꿔준다.

  for (const chart of chartData) {
    const monthData = new Date(chart.date).getMonth();
    months[monthData].value = months[monthData].value + chart.amount;
  }
  const maxValue = Math.max(months.map((data) => data.value));

  // 1번 데이터에 대하여, month 를뽑고, months안의 value 에 추가한다.

  return (
    <div>
      {months.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={100}
          label={data.label}
        />
      ))}
    </div>
  );
}

export default Chart;
