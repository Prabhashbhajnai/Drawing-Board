import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className='bg-cyan-600	 w-full h-screen flex items-center justify-center'>
            <Outlet />
        </div>
    )
}

export default HomeLayout