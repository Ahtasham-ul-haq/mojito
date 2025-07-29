import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CockTails from "./components/CockTails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default App