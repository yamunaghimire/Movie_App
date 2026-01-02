import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../../features/movies/pages/Home"


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element = {<Home/>}/>

        
    

        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes