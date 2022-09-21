import '../styles/global.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <div className={"container"}>
            <Navbar />
        </div>
        <Component {...pageProps} />
        <Footer />
        <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </div>
  )
}

export default MyApp
