import {Routes, Route} from "react-router-dom"
import Sidenav from "./components/Sidenav"
import Home from "./pages/Home"
import Course from "./pages/Course"
import Dashboard from "./pages/Dashboard"
import Details from "./components/Details"
import Login from "./pages/Login"

function App(){

  const isAuth = localStorage.getItem("admin")
  
    return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {
        isAuth ? 
      <> 
      <Route path="/dashboard" element={
        <Sidenav>
            <Dashboard />
          </Sidenav>
        } />

        <Route path="/details/:id" element={
          <Sidenav>
            <Details />
          </Sidenav>
        } />
        
      <Route path="/course" element={
        <Sidenav>
            <Course />
          </Sidenav>
        } />
        </>
       :
       <Route path="/login" element={<Login />} />

      }
    </Routes>
    )
}

export default App