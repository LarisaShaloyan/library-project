import {Link,  useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
            <div onClick={handleGoHome} className="text-2xl font-bold cursor-pointer  ">My Page</div>
            <div className="space-x-6 text-lg">
                <Link to="/" className="hover:text-blue-400 transition">Գլխավոր</Link>
                <Link to="/authors" className="hover:text-blue-400 transition">Հեղինակներ</Link>
                <Link to="/about" className="hover:text-blue-400 transition">Մեր մասին</Link>
                <Link to="/contact" className="hover:text-blue-400 transition">Կապ մեզ հետ</Link>
            </div>
        </nav>
    );
}

export default Navbar;
