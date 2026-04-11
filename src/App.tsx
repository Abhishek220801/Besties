import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Layout from "./components/app/Layout"
import Posts from "./components/app/Posts"
import Friends from "./components/app/Friends"
import Dashboard from "./components/app/Dashboard"
import Video from "./components/app/Video"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/app" element={<Layout/>} >
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="my-posts" element={<Posts/>} />
          <Route path="friends" element={<Friends/>} />
          <Route path="video-call" element={<Video/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
