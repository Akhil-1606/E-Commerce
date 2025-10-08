import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <div className='navbar navbar-expand-md d-flex justify-content-between p-4 bg-black'>
            <div>
                <b className='text-white navbar-text'>NextGen Accessories</b>
            </div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to="/home" className="text-white p-1 plain-link">Home</Link>
                </li>
                <li>
                    <Link to="/shop" className="text-white p-1 plain-link">Shop</Link>
                </li>
                <li>
                    <Link to="/cart" className="text-white p-1 plain-link">Cart</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
