// rrd
import { createBrowserRouter, RouterProvider} from "react-router-dom"

// Main layout
import MainLayout from "./layout/MainLayout"

// pages
import { Error, Faq, Home, Quizes, Stories } from "./pages"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children : [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/quizes",
          element: <Quizes/>,
        },
        {
          path: "/stories",
          element: <Stories/>,
        },
        {
          path: "/faq",
          element: <Faq/>,
        },
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App
