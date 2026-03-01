import { useUser } from "./UserContext"

const Dashboard = () => {
    const { isLoggedin } = useUser();
    return (

        <div className="py-10 px-5 text-center">
            <h2 className="text-xl text-gray-800 font-semibold">
                {isLoggedin ? 'This is your dashboard.' : 'Please login to access your dashboard.'}
            </h2>
        </div>
    )
}

export default Dashboard