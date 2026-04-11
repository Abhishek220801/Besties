const Video = () => {
  return (
    <div>
        <div className="bg-black w-full h-0 relative pb-[56.25%] rounded-xl">
            <video className="w-full h-full absolute top-0 left-0"></video>
            <button 
                className="absolute bottom-5 left-5 text-xs px-2.5 py-1 rounded-lg text-white"    
                style={{ background: 'rgba(255,255,255,0.1)'}}
                title="username"
            >
                Abhishek 
            </button>
        </div>
        <div>
            <div className="bg-black rounded-xl p-4"></div>
        </div>
    </div>
  )
}

export default Video
