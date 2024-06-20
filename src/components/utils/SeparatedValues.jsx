import React from "react";

function SeparatedValues({ values, separator = "•" }) {
  return (
    <>
      {values.map((ele, index) => (
        <React.Fragment key={index}>
          {ele}
          {index !== values.length - 1 && <span> {separator} </span>}
        </React.Fragment>
      ))}
    </>
  );
}

export default SeparatedValues;
