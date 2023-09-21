import { useEffect, useRef, useState } from "react";

export const Countdown: React.FC = () => {
  const [counter, setCounter] = useState(10);
  const timerRef = useRef<{ timerId: NodeJS.Timer | null }>({ timerId: null });

  useEffect(() => {
    if (timerRef.current.timerId !== null) {
      clearInterval(timerRef.current.timerId);
    }

    timerRef.current.timerId = setInterval(() => {
      setCounter((current) => current - 1);
    }, 1000);
  }, [counter]);

  const handleReset = () => {
    setCounter(10);
  };

  return (
    <div>
      <div data-testid="counter-display">{counter}</div>
      <button data-testid="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
