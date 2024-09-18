"use client";
import React from "react";
export default function useDebounce(value: string, delay = 500) {
  const [debouncedValue, setDebauncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
