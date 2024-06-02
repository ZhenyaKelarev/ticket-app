import { useState, useCallback } from "react";

export const useSimulateDelay = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const simulateDelay = useCallback((ms: number) => {
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, ms);
    });
  }, []);

  return { loading, simulateDelay };
};
