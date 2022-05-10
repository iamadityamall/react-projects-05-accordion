import React from "react";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const SingleQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="w-[90vw] lg:w-[40vw] shadow-md">
      <section className="flex justify-between items-center p-2">
        <h1 className="font-bold text-sm">{title}</h1>
        <button onClick={() => setShow(!show)} className="rounded-full bg-gray-200 p-1">
          {show ? <FiMinus /> : <FiPlus />}
        </button>
      </section>

      {show && <p className="p-2 text-sm">{info}</p>}
    </article>
  );
};

export default SingleQuestion;
