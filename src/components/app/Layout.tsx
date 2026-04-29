import {
  RiArrowLeftLine,
  RiChatAiLine,
  RiChatSmile2Line,
  RiGroupLine,
  RiHome9Line,
  RiLogoutCircleLine,
  RiLogoutCircleRLine,
  RiMenuLine,
  RiUser2Fill,
} from "@remixicon/react"

import Avatar from "../shared/Avatar.js"
import Card from "../shared/Card.js"
import { Link, Outlet, useLocation, useNavigate } from "react-router"
import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Dashboard from "./Dashboard.tsx"
import Context from "../../Context.tsx"
import useSWR, { mutate } from "swr"
import HttpInterceptor from "../../lib/HttpInterceptor.ts"
import { v4 as uuid } from "uuid"
import Fetcher from "../../lib/fetcher.ts"
import CatchError from "../../lib/CatchError.ts"
import FriendSuggestion from "./friends/FriendSuggestion.tsx"
import FriendRequest from "./friends/FriendRequest.tsx"
import FriendList from "./friends/FriendList.tsx"
import {useMediaQuery} from "react-responsive"
import Logo from "./Logo.tsx"
import IconButton from "../shared/IconButton.tsx"

const Layout = () => {
  const eightMinInMs = 8 * 60 * 1000
  const [open, setOpen] = useState(true)
  const { pathname } = useLocation()
  const { error } = useSWR("/auth/refresh-token", Fetcher, {
    refreshInterval: eightMinInMs,
    shouldRetryOnError: false,
  })

  const [expandedWidth, setExpandedWidth] = useState(0);
  const [collapsedWidth, setCollapsedWidth] = useState(0); // 80
  const rightAsideSize = 440
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const friendsUiBlackList = [
    "/app/friends",
    "/app/chat",
    "/app/audio-call",
    "/app/video-call",
  ]

  const isBlacklisted = friendsUiBlackList.some(path => path === pathname);

  const { session, setSession } = useContext(Context)
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await HttpInterceptor.post("/auth/logout", {})
      navigate("/login")
    } catch (err) {
      CatchError(err)
    }
  }

  useEffect(() => {
    if (error) logout()
  }, [error])

  useEffect(() => {
    setExpandedWidth(isMobile ? 0 : 320)
    setCollapsedWidth(isMobile ? 0 : 140)
  }, [isMobile])

  const sectionDimension = {
    width: isMobile ? '100%' : `calc(100% - ${(open ? expandedWidth : collapsedWidth) + rightAsideSize}px)`,
  }

  const menus = [
    {
      icon: <RiHome9Line />,
      href: "/app/dashboard",
      title: "Dashboard",
    },
    {
      icon: <RiChatSmile2Line />,
      href: "/app/my-posts",
      title: "Posts",
    },
    {
      icon: <RiGroupLine />,
      href: "/app/friends",
      disabled: true,
      title: "My Friends",
    },
  ]

  const getPathname = (path: string) =>
    path.split("/").pop()?.split("-").join(" ")

  const uploadImg = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.click()
    input.onchange = async () => {
      if (!input.files) return
      const file = input.files[0]
      const path = `profile-pictures/${uuid()}.png`
      const payload = {
        path,
        type: file.type,
        status: 'public-read'
      }
      try {
        const options = {
          headers: {
            "Content-Type": file.type,
          },
          withCredentials: false,
        }
        const { data } = await HttpInterceptor.post("/storage/upload", payload)
        await HttpInterceptor.put(data.url, file, options) // returns 200 status no other data response
        const { data: user } = await HttpInterceptor.put(
          "/auth/profile-picture",
          { path },
        )
        setSession({
          ...session,
          image: user.image,
        })
        mutate("/auth/refresh-token")
      } catch (err) {
        console.error(err)
      }
    }
  }

  error && <div>{error?.response?.data?.message}</div>

  return (
    <div className="min-h-screen">

    <nav className="lg:hidden flex justify-between items-center bg-linear-to-br from-indigo-900 via-purple-800 to-blue-900 sticky top-0 left-0 z-20000 w-full py-4 px-6">
      <Logo/>
      <div className="flex gap-4">
        <IconButton onClick={logout} icon={<RiLogoutCircleLine/>} type="danger"/>
        <Link to='/app/chat'>
          <IconButton icon={<RiChatAiLine/>} type="success"/>
        </Link>
        <IconButton icon={<RiMenuLine/>} onClick={() => setExpandedWidth(expandedWidth === 240 ? 0 : 240)} type="dark"/>
      </div>
    </nav>

      <motion.aside
        animate={{ width: open ? expandedWidth : collapsedWidth }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="bg-white fixed top-0 left-0 h-full overflow-auto z-20000"
      >
        <div className="space-y-8 lg:rounded-2xl h-full lg:p-8 p-6 bg-linear-to-br from-indigo-900 via-purple-800 to-blue-900">
          <motion.button
            onClick={() => {
              setOpen(!open)
            }}
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.25 }}
            className="fixed top-4 left-3 z-50 text-slate-200 lg:block hidden"
          >
            <RiMenuLine />
          </motion.button>
          <div className="space-y-6 mt-4">
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="avatar"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                >
                  {session && (
                    <Avatar
                      title={session.fullname}
                      subtitle={session.email}
                      imgUrl={session.image || "/images/avt.png"}
                      titleColor="white"
                      subtitleColor="#ddd"
                      size="md"
                      onClick={uploadImg}
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="icon"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-200 text-2xl flex justify-center"
                >
                  <RiUser2Fill />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            {menus.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center py-3 text-gray-300 hover:text-white ${
                    open ? "gap-4" : "justify-center"
                  }`}
                >
                  <span className="text-xl shrink-0">{item.icon}</span>

                  <AnimatePresence>
                    {open && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center text-gray-300 hover:text-white ${
              open ? "gap-2" : "justify-center"
            }`}
          >
            <div onClick={logout} className="flex gap-4">
              <RiLogoutCircleRLine />
              <AnimatePresence>
                {open && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    Logout
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </motion.aside>

      <motion.section
        animate={{
          marginLeft: isMobile ? 0 : (open ? expandedWidth : collapsedWidth),
        }}
        transition={{ duration: 0.25 }}
        style={sectionDimension}
        className="lg:py-8 lg:px-3 p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-8"
        >
        {
          !isBlacklisted &&
          <FriendRequest/>
        }
          <Card
            title={
              <div className="flex gap-4 items-center" onClick={() => navigate(-1)}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-200"
                >
                <RiArrowLeftLine />
                </motion.button>
                <h1>{getPathname(pathname)}</h1>
              </div>
            }
            divider
          >
            {pathname === "/app" ? <Dashboard /> : <Outlet />}
          </Card>
          {
            !isBlacklisted &&
            <FriendSuggestion/>
          }
        </motion.div>
      </motion.section>

      <aside
        className="lg:block hidden bg-white fixed top-0 right-0 h-full py-8 px-2 overflow-auto space-y-8"
        style={{ width: rightAsideSize }}
      >
        {
          !isBlacklisted &&
          <Card title="My Friends" divider>
            <FriendList gap={6} column={2}/>
          </Card>
        }
        <Card title="Recent Posts"></Card>
      </aside>
      
      
    </div>
  )
}

export default Layout
