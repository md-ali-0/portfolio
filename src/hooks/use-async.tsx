"use client";

import { useCallback, useEffect, useState } from "react";

// Type definitions
type AsyncState<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

type AsyncFn<T, Args extends any[]> = [
  AsyncState<T>,
  (...args: Args) => Promise<T | undefined>,
  () => void
];

export const useAsync = <T, Args extends any[]>(
  asyncFunction: (...args: Args) => Promise<T>,
  dependencies: React.DependencyList = []
): AsyncFn<T, Args> => {
  const [state, setState] = useState<AsyncState<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const execute = useCallback(
    async (...args: Args): Promise<T | undefined> => {
      setState({ loading: true, error: null, data: null });
      try {
        const data = await asyncFunction(...args);
        setState({ loading: false, error: null, data });
        return data;
      } catch (error) {
        setState({ loading: false, error: error as Error, data: null });
        return undefined;
      }
    },
    [asyncFunction]
  );

  const reset = useCallback(() => {
    setState({ loading: false, error: null, data: null });
  }, []);

  useEffect(() => {
    // Reset state when dependencies change
    setState({ loading: false, error: null, data: null });
  }, dependencies);

  return [state, execute, reset];
};