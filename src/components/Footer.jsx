import React from "react";

export default function Footer({ time }) {
  return (
    <div className="flex flex-col mx-auto my-20">
      <div className="text-center self-center bg-blue-700 text-white border-2 border-black p-3">
        <p>
          The current time in your timezone is {time.toDateString()},{" "}
          {time.toTimeString()}
        </p>
      </div>
    </div>
  );
}
