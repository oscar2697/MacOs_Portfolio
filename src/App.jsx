import { Dock, Home, Navbar, Welcome } from "#components"
import { Draggable } from "gsap/Draggable"
import gsap from "gsap"
import { Resume, Safari, Terminal, Finder, Text, Image, Contact, Photos, TrashWindow } from "#windows"

gsap.registerPlugin(Draggable)

function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <TrashWindow />

      <Home />
    </main>
  )
}

export default App
