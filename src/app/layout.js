import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tymoteusz Piątek/Teksty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen bg-bg-main min-h-screen flex flex-col justify-between text-typo-main overflow-x-hidden">
        <Header />
        <main className=" flex-grow flex px-[100px] py-[70px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
