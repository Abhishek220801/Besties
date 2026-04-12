import { RiArrowRightUpLine } from "@remixicon/react"
import Button from "./shared/Button"
import Card from "./shared/Card"
import Input from "./shared/Input"
import { Link } from "react-router"
import { motion } from "motion/react"

const Login = () => {
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
          <div className="grid md:grid-cols-2 min-h-130">
            <div className="p-8 space-y-7 flex flex-col justify-center">
              <div>
                <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
                <p className="text-gray-500">
                  Login to continue chatting with your besties
                </p>
              </div>
              <form className="space-y-5">
                <Input type="email" name="email" placeholder="Email Id" />
                <Input type="password" name="password" placeholder="Password" />
                <div className="flex justify-between">
                  <div className="flex justify-end">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-indigo-500 hover:text-indigo-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                </div>

                <Button type="primary">
                  <div className="w-full flex gap-1 justify-center">
                    <RiArrowRightUpLine />
                    Login
                  </div>
                </Button>
              </form>
              <div className="flex gap-1">
                <p>Don't have an account?</p>
                <Link
                  to="/signup"
                  className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="hidden md:flex bg-gradient-to-t from-sky-500 to-indigo-500 rounded-r-xl w-full items-center justify-center">
              <img
                src="/images/login.svg"
                alt="auth"
                className="max-w-[85%] h-auto"
              />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Login
