import TopBar from "./components/TopBar"
import Footer from './components/Footer'
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
