import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tymoteusz Piątek/Teksty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-main min-h-screen flex flex-col justify-between text-typo-main overflow-hidden">
        <Header />
        <main className="w-screen flex-grow flex px-[100px] py-[70px] overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
