import { useEffect, useState, useRef } from "react";

export const useFakeProgress = (isUploading: boolean, onFinish?: () => void) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<any | null>(null);

  useEffect(() => {
    if (!isUploading) {
      setProgress(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const increment = Math.max(0.1, (1 - prev / 100) * 2); 
        const next = prev + increment;
        return next >= 99 ? 99 : next;
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isUploading]);

  const finish = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(100);
    onFinish && onFinish();
  };

  return { progress, finish };
};
