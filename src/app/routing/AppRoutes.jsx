import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../../features/movies/pages/Home"
import MovieInfo from "../../features/movies/pages/MovieInfo"
import MoviesList from "../../features/movies/pages/MoviesList"
import ShowsList from "../../features/movies/pages/ShowsList"
import SearchPage from "../../features/movies/pages/SearchPage"
import Favorites from "../../features/movies/pages/Favourites"




const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element = {<Home/>}/>
        <Route path="/movie/:id" element={<MovieInfo/>} />
        <Route path="/movieslist" element={<MoviesList/>} />
         <Route path="/showslist" element={<ShowsList/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/favourites" element={<Favorites/>} />

        </Route>
         

    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes