function Layout(props) {
  return (
    <div>
      <h1>이것은 레이아웃</h1>
      {props.children}
    </div>
  );
}
export default Layout;
