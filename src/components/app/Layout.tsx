import {
  RiArrowLeftLine,
  RiChatAiLine,
  RiChatSmile2Line,
  RiGroupLine,
  RiHome9Line,
  RiLogoutCircleRLine,
  RiMenuLine,
  RiPhoneLine,
  RiUser2Fill,
  RiUserAddLine,
  RiVideoOnAiLine,
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

const Layout = () => {
  const eightMinInMs = 8 * 60 * 1000
  const [open, setOpen] = useState(true)
  const { error } = useSWR("/auth/refresh-token", Fetcher, {
    refreshInterval: eightMinInMs,
    shouldRetryOnError: false,
  })

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



  const expandedWidth = 320
  const collapsedWidth = 80
  const rightAsideSize = 440

  const sectionDimension = {
    width: `calc(100% - ${(open ? expandedWidth : collapsedWidth) + rightAsideSize}px)`,
  }

  const { pathname } = useLocation()

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
      <motion.aside
        animate={{ width: open ? expandedWidth : collapsedWidth }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="bg-white fixed top-0 left-0 h-full overflow-auto"
      >
        <div className="space-y-8 rounded-2xl h-full p-8 bg-linear-to-br from-indigo-900 via-purple-800 to-blue-900">
          <motion.button
            onClick={() => setOpen(!open)}
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.25 }}
            className="fixed top-4 left-3 z-50 text-slate-200"
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

      {/* CENTER CONTENT PANEL */}
      <motion.section
        animate={{
          marginLeft: open ? expandedWidth : collapsedWidth,
        }}
        transition={{ duration: 0.25 }}
        style={sectionDimension}
        className="py-8 px-3"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Card
            title={
              <div className="flex gap-4 items-center">
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
        </motion.div>
      </motion.section>

      {/* RIGHT SIDEBAR FRIEND LIST */}
      <aside
        className="bg-white fixed top-0 right-0 h-full py-8 px-2 overflow-auto"
        style={{ width: rightAsideSize }}
      >
        <div className="overflow-auto h-68 mb-4">
          <Card title="Suggestions" divider>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex gap-4 mb-2.5">
                  <img
                    src="/images/avt.png"
                    alt="avt"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-black font-medium">Rishi Kapoor</h1>
                    <button
                      title="Add Friend"
                      className="bg-green-500 text-white rounded px-2 py-1 text-xs hover:bg-green-600 flex gap-2 items-center"
                    >
                      <div className="scale-75">
                        <RiUserAddLine />
                      </div>
                      <span>Add Friend</span>
                    </button>
                  </div>
                </div>
              ))}
          </Card>
        </div>

        <Card title="Friends" divider>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
            className="space-y-5"
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-gray-100 p-2 rounded-lg flex justify-between items-center"
                >
                  <Avatar
                    size="md"
                    imgUrl="/images/girl-avt.png"
                    title="Shreya Ghoshal"
                    subtitle={
                      <small
                        className={`${index % 2 === 0 ? "text-zinc-400" : "text-green-400"} font-medium`}
                      >
                        {index % 2 !== 0 ? "Online" : "Offline"}
                      </small>
                    }
                  />
                  <div className="space-x-2 text-xs flex">
                    <Link to="/app/chat">
                      <RiChatAiLine className="hover:text-blue-600 text-blue-500" />
                    </Link>
                    <Link to="/app/audio-call">
                      <RiPhoneLine className="text-green-400 hover:text-green-500" />
                    </Link>
                    <Link to="/app/video-call">
                      <RiVideoOnAiLine className="text-amber-500 hover:text-amber-600" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </Card>
      </aside>
    </div>
  )
}

export default Layout
