// Learned how to use the useEffect() for fetch() from:
// https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
import { useState, useEffect } from 'react';

function useFetch(url){

  // creating hook for state management in functional componenet
  const [data, setData] = useState([]);

  // function to be used by useEffect() for fetch() data from server at localhost:8000
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
  }

  // useEffect() 
  useEffect(() => {
    fetchUrl();
  }, []);

  // without the [] around data it would error out with undefined. 
  // TODO: figure out why. lol
  return [data];

}

export { useFetch };
