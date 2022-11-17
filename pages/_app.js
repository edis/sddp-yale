import '../styles/global.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
     <>
      <Head>
          <meta lang={"en"} charSet="UTF-8" />
          <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

    <div>
        <Head>
            <title>SSDP Yale</title>
        </Head>
        <div>
            <div className={"container"}>
                <Navbar />
            </div>
            <Component {...pageProps} />
            <Footer />
        </div>

    </div>
     </>
  )
}

export default MyApp
