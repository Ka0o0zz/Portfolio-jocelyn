import "@/styles/globals.scss";
import { AppContextProvider } from "@/useContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
