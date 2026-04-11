import { RiArrowLeftLine, RiChatAiLine, RiChatSmile2Line, RiGroupLine, RiHome9Line, RiLogoutCircleRLine, RiMenuLine, RiPhoneLine, RiVideoOnAiLine } from "@remixicon/react"
import Avatar from "../shared/Avatar.js"
import Card from "../shared/Card.js"
import { Link, Outlet, useLocation } from "react-router"
import { useState } from "react"

const Layout = () => {
    const [open, setOpen] = useState(true);
    const expandedWidth = 350;
    const collapsedWith = 80;
    const rightAsideSize = 450;
    const sectionDimension = {
        width: `calc(100% - ${(open ? expandedWidth : collapsedWith)+rightAsideSize}px)`,
        marginLeft: open ? expandedWidth : collapsedWith
    }

    const {pathname} = useLocation();

    const menus = [
        {
            icon: <RiHome9Line />,
            href: "/app/dashboard",
            title: "Dashboard"
        },
        {
            icon: <RiChatSmile2Line />,
            href: "/app/my-posts",
            title: "Posts"
        },
        {
            icon: <RiGroupLine />,
            href: "/app/friends",
            title: "My Friends"
        },
    ]

    const getPathname = (path: string) => {
        return path.split("/").pop()?.split("-").join(" ")
    }

  return (
    <div className="min-h-screen">
        <aside 
            className={`bg-white p-8 fixed top-0 left-0 h-full overflow-auto transition-all duration-300`} 
            style={{ width: open ? expandedWidth : collapsedWith }}>
            <div className={`space-y-8 rounded-2xl h-full bg-linear-to-br from-indigo-900 via-purple-800 to-blue-900 transition-all duration-300 ${open ? "p-8" : "p-6"}`}>
                <button title="sidebar" onClick={() => setOpen(!open)}>
                    <RiMenuLine
                        className={`transition-transform hover:rounded-full hover:bg-indigo-900 ${
                            open ? "" : "rotate-180"    
                        }`}
                    />
                </button>
                <Avatar 
                    title={open ? "Abhishek" : ""}
                    subtitle={open ? "Junior Software Engineer" : ""} 
                    imgUrl="/images/avt.png"
                    titleColor="white"
                    subtitleColor="#ddd"
                    size="lg"
                />
                <div>
                    {
                        menus.map((item) => (
                            <Link key={item.href} to={item.href} className="flex items-center gap-4 text-gray-300 hover:text-white py-3">
                                {item.icon}
                                <label className={`transition-all duration-200 ${open ? "opacity-100": "opacity-0 hidden"}`}>
                                    {item.title}
                                </label>
                            </Link>
                        ))
                    }
                    <button className="flex items-center gap-2 text-gray-300 hover:text-white py-3">
                        <RiLogoutCircleRLine />
                        <label>Logout</label>
                    </button>
                </div>
            </div>
        </aside>
        
        <section className="py-8 px-1" style={sectionDimension}>
            <Card title={
                <div className="flex gap-4 items-center">
                    <button title="go back" className="bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-200">
                        <RiArrowLeftLine/>
                    </button>
                    <h1>{getPathname(pathname)}</h1>
                </div>
            } divider>
                <Outlet/>
            </Card>
        </section>

        <aside className="bg-white fixed top-0 right-0 h-full p-8 overflow-auto" style={{width: rightAsideSize}}>
            <Card title="My Friends" divider>
                <div className="space-y-5">
                    {
                        Array(20).fill(0).map((item, index) => (
                            <div key={index} className="bg-gray-100 p-2 rounded-lg flex justify-between items-center">
                                <Avatar 
                                    size="md"
                                    imgUrl="/images/avt.png"
                                    title="Kamya Kharbanda"
                                    subtitle={
                                        <small className={`${index % 2 === 0 ? 'text-zinc-400' : 'text-green-400'} font-medium`}>{index % 2 !== 0 ? "Online" : "Offline"}</small>
                                    } 
                                    subtitleColor="seagreen"   
                                    key={index}
                                />
                                <div className="space-x-2 text-xs">
                                    <button title="Chat" className="hover:text-blue-600 text-blue-500">
                                        <RiChatAiLine/>
                                    </button>
                                    <button title="Call" className="text-green-400 hover:text-green-500">
                                        <RiPhoneLine/>
                                    </button>
                                    <button title="Video call" className="text-amber-500 hover:text-amber-600">
                                        <RiVideoOnAiLine/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Card>
        </aside>
    </div>
  )
}

export default Layout
