import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-3xl text-white bg-gray-700 p-4 text-center">
        <p>User: {userid}</p>
      </div>
    </>
  );
}
