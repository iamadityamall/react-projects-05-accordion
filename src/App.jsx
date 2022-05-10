import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import data from "./data";
import { useEffect } from "react";

const App = () => {
  const [questions,] = useState(data);

  useEffect(() => {
    document.title = "accordion";
  })

  return (
    <main className="flex justify-center items-center h-screen bg-purple-600">
      <div className="p-4 mx-5 flex flex-col justify-center space-y-5 rounded-xl lg:flex-row lg:space-y-0 lg:w-[60vw] bg-white">
        <h1 className="font-bold font-mono text-3xl lg:text-2xl p-2">
          questions and answers about login
        </h1>
        <section className="flex flex-col space-y-5">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
