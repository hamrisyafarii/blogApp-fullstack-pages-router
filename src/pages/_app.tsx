import Header from "@/components/Layouts/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <div className="p-8 md:px-20 lg:px-30 px-4">
        <Component {...pageProps} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
