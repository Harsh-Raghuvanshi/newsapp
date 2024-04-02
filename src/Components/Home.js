import React, { useState, useEffect } from "react";
import Newscard from "./Newscard";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "apiKey=a1ebb204ac0b494fa47e5006da4180f6";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <div>
        <Newscard articlesinfo={articles}/>
      </div>
    </div>
  );
}

export default Home;
