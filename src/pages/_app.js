import DefaultLayout from "@/layouts";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
