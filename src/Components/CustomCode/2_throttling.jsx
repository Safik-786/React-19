import { useRef, useCallback } from "react";

function Search() {
  const lastRun = useRef(0);

  const throttledSearch = useCallback((query) => {
    const now = Date.now();
    if (now - lastRun.current >= 500) {
      lastRun.current = now;
      fetch(`/api/search?q=${query}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, []);

  return (
    <input onChange={(e) => throttledSearch(e.target.value)} />
  );
}