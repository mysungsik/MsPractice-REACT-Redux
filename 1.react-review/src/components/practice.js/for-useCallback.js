import React from "react";

function ForUseCallback(props) {
  const { funA } = props;
  console.log("this is for callback");

  funA();

  return <div></div>;
}

export default React.memo(ForUseCallback);
