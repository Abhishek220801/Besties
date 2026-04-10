import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Layout from "./components/app/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/app" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
