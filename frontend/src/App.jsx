import {Routes, Route} from "react-router-dom"
import Sidenav from "./components/Sidenav"
import Home from "./pages/Home"
import Course from "./pages/Course"
import Attendance from "./pages/Attendance"
import Reports from "./pages/Reports"
import Dashboard from "./pages/Dashboard"
import Details from "./components/Details"

function App(){
  
    return (
      <Routes>
      <Route path="/" element={<Home />} />
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
        <Route path="/attendance" element={
          <Sidenav>
            <Attendance />
          </Sidenav>
        } />
        <Route path="/report" element={
          <Sidenav>
            <Reports />
          </Sidenav>
        } />
    </Routes>
    )
}

export default App