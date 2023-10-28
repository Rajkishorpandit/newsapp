import { useState, useEffect } from "react";

const useBBCNewsData = () => {
  const [BBCnewsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("data",BBCnewsData)

  useEffect(() => {
    async function fetchBBCNewsData() {
      try {
        setLoading(true);

        const apiKey = 'SIGN-UP-FOR-KEY'; 
        const apiUrl = 'https://bbc-news-live.p.rapidapi.com/news';

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'bbc-news-live.p.rapidapi.com',
          },
        };

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        setNewsData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchBBCNewsData();
  }, []);

  return { BBCnewsData, loading, error };
};

export default useBBCNewsData;