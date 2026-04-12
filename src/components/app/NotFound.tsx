import type { FC } from "react"
import { Link } from "react-router"
import { RiArrowLeftLine, RiEmotionSadLine } from "@remixicon/react"
import { motion } from "motion/react"

const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 px-4">

      {/* CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center space-y-6"
      >

        {/* ICON */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          className="flex justify-center text-indigo-500 text-6xl"
        >
          <RiEmotionSadLine />
        </motion.div>


        {/* ERROR TITLE */}
        <h1 className="text-4xl font-semibold text-indigo-700">
          404
        </h1>


        {/* MESSAGE */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-700">
            Oops! This page isn't part of your Besties circle.
          </h2>

          <p className="text-sm text-zinc-500">
            The page you're looking for doesn’t exist or may have been moved.
          </p>
        </div>


        {/* ACTION BUTTON */}
        <Link
          to="/app/dashboard"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          <RiArrowLeftLine />
          Back to Dashboard
        </Link>


        {/* EXTRA FRIENDLY FOOTER TEXT */}
        <p className="text-xs text-zinc-400">
          Lost? Let’s get you back to your friends 🙂
        </p>

      </motion.div>
    </div>
  )
}

export default NotFound