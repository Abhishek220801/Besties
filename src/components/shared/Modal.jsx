import { RiCloseCircleFill } from '@remixicon/react'
import 'animate.css'

const Modal = ({open=true, close, title="Modal title", children="Your content goes here"}) => {
  return (
    <>
    { open && 
    <div
    style={{
        background: 'rgba(0,0,0,0.9)'
        }}
        className='h-screen flex items-center justify-center fixed top-0 left-0 w-full animate__animated animate__fadeIn animate__faster'>
      <div className='animate__animated animate__bounceIn bg-white border border-gray-100 shadow-xl px-5 py-4 rounded-lg w-1/3 space-y-2 relative'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='text-gray-500'>
            {children}
        </div>
        <button className='text-gray-500 hover:text-gray-600 absolute top-3 right-3' onClick={close}>
            <RiCloseCircleFill 
                className='w-5 h-5'
                />
        </button>
      </div>
    </div>
    }
    </>
  )
}

export default Modal
