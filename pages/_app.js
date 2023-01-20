import "../styles/globals.css";
import { Montserrat, Poppins } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--montserrat",
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

function MyApp({ Component, pageProps }) {
  return (
    // <main className={`${montserrat.className} ${poppins.className}`}>
    <main className={montserrat.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
