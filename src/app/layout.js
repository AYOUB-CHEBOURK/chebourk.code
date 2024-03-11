
import { Montserrat } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/motion/transitionProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Chebourk Code",
  description: "Portfolio Modern Edition with next js version of motion library for developers",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
