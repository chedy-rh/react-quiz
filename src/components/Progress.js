import React from "react";

export default function Progress({
  index,
  questionsNumber,
  points,
  possiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={questionsNumber} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionsNumber}
      </p>
      <p>
        <strong>{points}</strong> / {possiblePoints}
      </p>
    </header>
  );
}
