//rrd imports
import { Outlet } from "react-router-dom"
import { Navbar   ,Footer } from "../components"




function MainLayout() {
  return (
    <>
      <header className="max-w-[1200px] mx-auto">
        <Navbar/>
      </header>
      <main className="max-w-[1200px] mx-auto">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default MainLayout
