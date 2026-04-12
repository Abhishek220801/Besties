import { RiArrowRightUpLine } from "@remixicon/react"
import Button from "./shared/Button"
import Card from "./shared/Card"
import Input from "./shared/Input"
import { Link } from "react-router"
import { motion } from "motion/react"

const Signup = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        whileHover={{ y: -2 }}
      >
        <Card noPadding>
          <div className="grid grid-cols-2">
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-black">Join Besties</h1>
                <p className="text-gray-500">Start your first chat now !</p>
              </div>
              <form className="space-y-5">
                <Input type="text" name="fullname" placeholder="Full Name" />
                <Input type="email" name="email" placeholder="Email Id" />
                <Input type="number" name="mobile" placeholder="Mobile Number" />
                <Input type="password" name="password" placeholder="Password" />
                <Button type="danger">
                  <div className="w-full flex gap-1">
                    <RiArrowRightUpLine />
                    Sign up
                  </div>
                </Button>
              </form>
              <div className="flex gap-1">
                <p>Already have an account?</p>
                <Link
                  to="/login"
                  className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:flex bg-linear-to-t from-sky-500 to-indigo-500 rounded-r-xl flex justify-center items-center">
              <img src="/images/auth.svg" alt="auth" />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Signup
