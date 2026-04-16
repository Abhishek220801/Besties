import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Layout from "./components/app/Layout"
import Posts from "./components/app/Posts"
import Friends from "./components/app/Friends"
import Dashboard from "./components/app/Dashboard"
import Video from "./components/app/Video"
import Audio from "./components/app/Audio"
import Chat from "./components/app/Chat"
import NotFound from "./components/app/NotFound"
import Context from "./Context"
import { useState } from "react"
import { ToastContainer } from "react-toastify"

function App() {
  const [email, setEmail] = useState<any>(null)
  return (

    <Context.Provider value={{email, setEmail}}>
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
              <Route path="audio-call" element={<Audio/>} />
              <Route path="chat" element={<Chat/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
