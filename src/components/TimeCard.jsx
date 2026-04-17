import React from "react";

export default function TimeCard({ time }) {
  function getSquare(time) {
    let x = 2 ** 10;
    let exp = 9;
    while (time > x) {
      x *= 2;
      exp++;
    }
    return exp;
  }
  return (
    <div className="flex flex-col justify-around gap-4 p-6 text-xl max-w-[75%] border-2 bg-gray-800 border-white rounded-3xl text-white items-center mx-auto my-10">
      <p>It has been {time.getTime()} milliseconds since Epoch time.</p>
      <p>That makes it larger than 2 ^ {getSquare(time.getTime())}!</p>
      <p>
        There are approximately 10^81 atoms in the universe, so it's got a while
        to go.
      </p>
    </div>
  );
}
