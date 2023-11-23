"use client";
import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

import { Navbar } from "@/components/Header/Navbar";
import { Loading } from "@/components/Loading";
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
        <Loading />
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
