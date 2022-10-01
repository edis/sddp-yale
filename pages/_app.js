import '../styles/global.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
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
        <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </div>
  )
}

export default MyApp
