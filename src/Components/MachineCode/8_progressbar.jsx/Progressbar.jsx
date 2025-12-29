import React, { useRef, useState, useEffect } from "react";

function Progressbar() {
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);

  const handleClick = () => {
    // Clear existing interval before starting a new one
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setProgress(100);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }

        if (prev <= 50) return prev - 5;
        return prev - 1;
      });
    }, 30);
  };

  // Cleanup on unmount (VERY IMPORTANT)
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center h-screen items-center">
      <div className="h-5 w-100 border rounded overflow-hidden">
        <div
          className="h-full w-full bg-green-500"
          style={{ transform: `translateX(-${progress}%)` }}
        />
      </div>

      <button
        onClick={handleClick}
        className="px-4 py-1 rounded bg-white shadow text-blue-700"
      >
        Start Loading
      </button>
    </div>
  );
}

export default Progressbar;
