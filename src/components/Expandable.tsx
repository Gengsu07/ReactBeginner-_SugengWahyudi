import React, { useState } from "react";

interface Props {
  maxChar?: number;
  children: string;
}

const Expandable = ({ maxChar = 99, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded ? children : children.substring(0, maxChar) + "...";
  if (children.length <= maxChar) {
    return <p>{children}</p>;
  } else {
    return (
      <p>
        {text}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    );
  }
};

export default Expandable;
