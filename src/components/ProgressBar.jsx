import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [progressBar, setProgressBar] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setProgressBar((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timer} value={progressBar} />;
}
