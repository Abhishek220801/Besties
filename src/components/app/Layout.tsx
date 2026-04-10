import { RiChatSmile2Line, RiGroupLine, RiHome9Line, RiLogoutCircleRLine } from "@remixicon/react"
import Avatar from "../shared/Avatar.js"
import Card from "../shared/Card.js"
import { Link } from "react-router"

const Layout = () => {

    const leftAsideSize = 350;
    const rightAsideSize = 450;
    const sectionDimension = {
        width: `calc(100% - ${leftAsideSize+rightAsideSize}px)`,
        marginLeft: leftAsideSize
    }

    const menus = [
        {
            icon: <RiHome9Line />,
            href: "/app",
            title: "Dashboard"
        },
        {
            icon: <RiChatSmile2Line />,
            href: "/posts",
            title: "Posts"
        },
        {
            icon: <RiGroupLine />,
            href: "/friends",
            title: "My Friends"
        },
    ]

  return (
    <div className="min-h-screen">
        <aside className={`bg-white fixed top-0 left-0 h-full p-8 overflow-auto`} style={{width: leftAsideSize}}>
            <div className="space-y-8 h-full rounded-2xl p-8 bg-linear-to-br from-indigo-900 via-purple-800 to-blue-900">
                <Avatar 
                    title="Abhishek" 
                    subtitle="Junior Software Engineer" 
                    imgUrl="/images/avt.png"
                    titleColor="white"
                    subtitleColor="#ddd"
                    size="lg"
                />
                <div>
                    {
                        menus.map((item) => (
                            <Link to={item.href} className="flex items-center gap-2 text-gray-300 hover:text-white py-3">
                                {item.icon}
                                <label>{item.title}</label>
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
            <Card></Card>
        </section>

        <aside className="bg-white fixed top-0 right-0 h-full p-8 overflow-auto" style={{width: rightAsideSize}}>
            <Card title="My Friends" divider>
                <div>
                    <div>
                        {
                            Array(20).fill(0).map((item, index) => (
                                <Avatar 
                                    imgUrl="/images/avt.png"
                                    title="Kamya Kharbanda"
                                    subtitle={
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <label className="text-gray-500 text-xs">Online</label>
                                        </div>
                                    } 
                                    subtitleColor="seagreen"   
                                />
                            ))
                        }
                    </div>
                </div>
            </Card>
        </aside>
    </div>
  )
}

export default Layout
