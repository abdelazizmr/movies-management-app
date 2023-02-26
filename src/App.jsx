import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Movies from "./pages/home/Movies"
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import AdminMovies from './pages/admin/adminMovies/AdminMovies'
import AdminUsers from "./pages/admin/adminUsers/AdminuUsers"
import SpecificMovie from "./pages/specificMovie/SpecificMovie"
import AddMovie from './pages/admin/adminMovies/AddMovie'
import EditMovie from './pages/admin/adminMovies/EditMovie'
import AddUser from './pages/admin/adminUsers/AddUser'
import EditUser from './pages/admin/adminUsers/EditUser'

function App() {

  return (
    <BrowserRouter>

    

        <Routes>
           <Route path="/" element={<Movies />} /> 
           <Route path="/movie/:id" element={<SpecificMovie />} /> 
           <Route path="/login" element={<Login />} /> 
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminMovies/>} />
            <Route path="/admin/movies/add-movie" element={<AddMovie/>} />
            <Route path="/admin/movies/edit/:id" element={<EditMovie/>} />
            <Route path="/admin/users" element={<AdminUsers/>} />
            <Route path="/admin/users/add-user" element={<AddUser/>} />
            <Route path="/admin/users/edit/:id" element={<EditUser/>} />
          </Route>
        </Routes>


    </BrowserRouter>  
  )
}

export default App
