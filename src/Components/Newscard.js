import React from "react";
import Individualnews from "./Individualnews";
export default function Newscard(props) {
  let { articlesinfo } = props;
  return (
    <div>
      {articlesinfo.map((article, index) => (
        <Individualnews allinfo={article} key={index} />
      ))}
    </div>
  );
}
