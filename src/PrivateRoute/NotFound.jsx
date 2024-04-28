
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-6xl font-bold text-gray-800">404</h2>
            <h2 className="text-3xl text-gray-600 mb-8">Page Not Found</h2>
            <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
            {/* <img src="/images/404.png" alt="404 Error" className="mt-8" /> */}
        </div>
    );
};

export default NotFound;
