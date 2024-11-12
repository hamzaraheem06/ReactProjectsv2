import React from "react";
import ReactLoading from "react-loading"; // for beautiful loading animation

function Loading({ type, color, delay }) {
  return <ReactLoading type={type} color={color} height={"5%"} width={"10%"} />;
}

export default Loading;
