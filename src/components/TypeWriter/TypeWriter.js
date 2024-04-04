import React, { useEffect, useState } from "react";
import "./TypeWriter.css";

export const TypeWriter = (props) => {
  const [text, setText] = useState("");

  const writeScreen = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => writeScreen(text, i + 1), 100);
    }
  };

  useEffect(() => {
    setTimeout(() => writeScreen(props.text), []);
  }, [props.text]); 

  return (
    <div>
      <div className="write-machine">{text}</div>
    </div>
  );
};

export default TypeWriter;
