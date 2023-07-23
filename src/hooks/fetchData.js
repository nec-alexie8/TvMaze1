import { useEffect, useState } from "react";
import HTTP from "../config";

export default function useFetchData(url, option) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchTv = async () => {
      setloading(true);
      await HTTP.get(url, option)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setloading(false);
        });
    };
    fetchTv();
  }, [url, option]);

  return { data, error, loading };
}
