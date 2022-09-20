import '../styles/global.scss'
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (

    <div>
        <div className={"container"}>
            <Navbar />
        </div>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
