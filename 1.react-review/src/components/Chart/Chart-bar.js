import styles from "./Chart-bar.module.css";
function ChartBar(props) {
  // 차트에 들어가는것 => 전체 달, 달에 들어가는 Amount
  const { value, maxValue, label } = props;

  let barFillWidth = "0%";

  if (maxValue > 0) {
    barFillWidth = Math.round((value / maxValue) * 100) + "%"; // 계산된 값의 퍼센트 처리 => 추후 css 프로퍼티 가 될것이다.
  }

  console.log(barFillWidth);

  // style을 컴포넌트 함수에서 정의할때에는, 객체 안에 넣어서 사용해야 하므로, style={} 이것 안에, 객체가 하나 더 들어간 것이다
  //     특별한 구문이 아니라, CSS 스타일을 REACT에서 만질때, 객체를 써야하기 때문에 그런것이다.
  return (
    <div className={styles.maindiv}>
      <div className={styles.inner}>
        <div className={styles.fill} style={{ width: barFillWidth }}></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
export default ChartBar;
