import React from "react";

function Card({ heading, desc }) {
  return (
    <div className="flex flex-col gap-2 card-bg p-4 w-80 rounded-lg">
      <div className="icon-bg w-10 h-10 rounded-lg flex justify-center items-center ">
        <img src="src\assets\light-bolt-svgrepo-com.svg" className="h-6 w-6" />
      </div>
      <h2 className="text-slate-100 font-semibold text-sm">{heading}</h2>
      <p className="text-slate-300 text-xs">{desc}</p>
    </div>
  );
}

export default Card;
