import { useEffect, useState } from "react";
import { authApi } from "../api/AuthApi";
import { sessionStorage } from "../storage/SessionStorage";

export const useSession = () => {
    const SESSION_KEY = "SESSION_KEY";
    const cache = sessionStorage.getItem(SESSION_KEY);
    const [data, setData] = useState(cache);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if (!cache) {
        setLoading(true);
      }
      authApi
        .getSession()
        .then(session => {
          if (session) {
            setData(session);
            sessionStorage.setItem(SESSION_KEY, session);
          } else {
            setData(null);
            sessionStorage.clear();
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return { data, setData, loading };
  };