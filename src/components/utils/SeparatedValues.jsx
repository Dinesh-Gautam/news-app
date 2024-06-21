import React from "react";

function SeparatedValues({ values, separator = "•" }) {
  return (
    <>
      {values
        .filter((e) => e)
        .map((ele, index, arr) => (
          <React.Fragment key={index}>
            {ele}
            {index !== arr.length - 1 && <span> {separator} </span>}
          </React.Fragment>
        ))}
    </>
  );
}

export default SeparatedValues;
