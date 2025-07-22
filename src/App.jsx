import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className="flex-center text-3xl text-indigo-500 h-[100vh]">Hello, World</div>
  )
}

export default App