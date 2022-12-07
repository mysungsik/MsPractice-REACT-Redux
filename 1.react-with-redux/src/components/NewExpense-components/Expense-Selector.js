function ExpenseSelector(props) {
  const { onSaveYearValue } = props;

  return (
    <select onChange={(e) => onSaveYearValue(e)}>
      <option value={"2018"}>2018</option>
      <option value={"2019"}>2019</option>
      <option value={"2020"}>2020</option>
      <option value={"2021"}>2021</option>
      <option value="2022">2022</option>
    </select>
  );
}
export default ExpenseSelector;
