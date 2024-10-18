"use client";

import { ThemeProvider as NextThemaProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemaProvider {...props}>{children}</NextThemaProvider>;
}
