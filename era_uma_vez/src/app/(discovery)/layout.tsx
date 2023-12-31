import Header from "@/components/layout/Header";
import "./globals.css";
import "./animation.css";
import { Aclonica, Crushed } from "next/font/google";
import Footer from "@/components/layout/Footer";

const crushed = Crushed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crushed",
  weight: "400"
});

const aclonica = Aclonica({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-aclonica",
});

export const metadata = {
  title: "Era Uma Vez",
  description: "Leia mais com tecnologia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${crushed.variable} ${aclonica.variable}`}>
        <body className="font-crushed">
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
