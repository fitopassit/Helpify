"use client";

import { useEffect } from "react";

import ErrorComponent from "@/app/(dashboardPages)/components/ErrorComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorComponent error={error} reset={reset} />;
}
