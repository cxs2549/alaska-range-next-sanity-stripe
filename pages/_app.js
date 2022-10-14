import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/globals.css"
import { AnimatePresence } from "framer-motion"
import {StateContext} from '../context/StateContext'
import { Toaster } from "react-hot-toast"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <Header />
        <Toaster />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </StateContext>
    </>
  )
}

export default MyApp
