import React from "react";

export default function Footer({ time }) {
  return (
    <div className="absolute bottom-2 left-[25%] text-center bg-blue-700 text-white border-2 border-black p-3">
      <p>
        The current time is {time.toDateString()}, {time.toTimeString()}
      </p>
    </div>
  );
}
