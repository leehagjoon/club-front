import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = "http://localhost:3000/";
  axios.defaults.withCredentials = true;

  return <Component {...pageProps} />;
}
