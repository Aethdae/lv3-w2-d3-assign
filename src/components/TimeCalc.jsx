import React, { useState } from "react";

export default function TimeCalc({ timeMS, timeISO, timeOffset }) {
  const [version, setVersion] = useState("ms");
  const buttonClasses =
    "px-4 py-2 bg-blue-700 text-white hover:bg-blue-500 hover:outline-1 active:outline-4 hover:outline-white rounded-xl";
  return (
    <div className="flex items-center flex-col text-xl gap-10 bg-gray-800 max-w-160 mx-auto py-10 rounded-2xl text-white">
      {version === "ms" && (
        <>
          <TimeMs timeMS={timeMS} />
        </>
      )}
      {version === "iso" && (
        <>
          <TimeIso timeISO={timeISO} />
        </>
      )}
      {version === "offset" && (
        <>
          <TimeOffset timeOffset={timeOffset} />
        </>
      )}
      <div className="flex gap-3 justify-center max-w-160">
        <button
          className={buttonClasses}
          onClick={() => {
            setVersion("ms");
          }}
        >
          Milliseconds
        </button>
        <button
          className={buttonClasses}
          onClick={() => {
            setVersion("iso");
          }}
        >
          ISO String
        </button>
        <button
          className={buttonClasses}
          onClick={() => {
            setVersion("offset");
          }}
        >
          UTC Offset
        </button>
      </div>
    </div>
  );
}
function TimeMs({ timeMS }) {
  return (
    <div className="text-center">
      <p>Here are the milliseconds from last second:</p>
      <p>{timeMS}</p>
    </div>
  );
}

function TimeIso({ timeISO }) {
  return (
    <div className="text-center">
      <p>Here is the text in ISO String:</p>
      <p>{timeISO}</p>
    </div>
  );
}

function TimeOffset({ timeOffset }) {
  return (
    <div className="text-center">
      <p>Here is how many minutes you are from UTC:</p>
      <p>{timeOffset}</p>
    </div>
  );
}
