import { useUser } from "./UserContext"

const Navbar = () => {
    const { isLoggedin, setIsLoggedin } = useUser();
    return (
        <nav className="bg-[#4a90e2] text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-[20px] font-semibold">
                Auth App
            </h1>

            <span className="text-xl mr-4 font-semibold">
                {isLoggedin ? 'Welcome, User!' : null}
            </span>
            {/* <div className="flex items-center">
            </div> */}
            <button
                className="bg-white text-[#4a90e2] px-3 py-1.5 rounded font-bold cursor-pointer transition-colors duration-300 hover:bg-[#e0eaff]"
                onClick={() => setIsLoggedin((prev: boolean) => !prev)}
            >
                {isLoggedin ? 'Logout' : 'Login'}
            </button>
        </nav>
    )
}

export default Navbar