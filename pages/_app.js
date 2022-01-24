import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/progress.css";

function MyApp({ Component, pageProps }) {
  // Router.events.on("routeChangeStart", (url) => {
  //   NProgress.start();
  // });
  // Router.events.on("routeChangeComplete", (url) => {
  //   NProgress.done();
  // });

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };
    const handleRouteChangeOff = (url) => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeOff);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
