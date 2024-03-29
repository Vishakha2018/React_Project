import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  // useEffect runs after first render and aafter every update if no array dependency is added ==?[input] or empty array
  //  ex->ads after 5-10 seconds of usage of sites
  useEffect(() => {
    document.title=`chats(${myNum})`
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
