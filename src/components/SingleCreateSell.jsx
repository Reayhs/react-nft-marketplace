import React, { useState } from "react";

function SingleCreateSell({ icon, title, desc }) {
  const [status, setStatus] = useState(false);
  return (
    <div className="box bg-[#252531] w-full p-6 rounded-3xl px-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl px-4 flex gap-4 items-center">
          {" "}
          <i className={`${icon} p-2 bg-[#5142FC] rounded-xl`}></i> {title}
        </h1>
        <i
          onClick={() => setStatus(!status)}
          class={` font-bold text-2xl cursor-pointer ${
            status ? "fa-solid fa-xmark" : "fa-solid fa-check"
          }`}
        ></i>
      </div>
      {status && <p className="text-lg p-4">{desc}</p>}
    </div>
  );
}

export default SingleCreateSell;
