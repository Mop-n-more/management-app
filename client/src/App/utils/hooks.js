import { useState, useEffect } from 'react';

function useFetch(url){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  // data.shift();
  console.log("from hooks.js - data: " + data);
  return [data, loading];

}

export { useFetch };
