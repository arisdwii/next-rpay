"use client";
import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

import { Navbar } from "@/components/Header/Navbar";
import { Loader } from "@/components/Loader";
import { FooterLayout } from "./FooterLayout";

export const ForFirstLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setTimer = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    setTimer();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <AppProgressBar color="#ffb20f" options={{ showSpinner: false }} />
          <Navbar />
          {children}
          <FooterLayout />
        </ThemeProvider>
      )}
    </>
  );
};
