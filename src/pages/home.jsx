import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import headerImage from "../assets/image/h-image.png";
import wirelessCharger from "../assets/image/Charger.png";
import powerBank from "../assets/image/powerBank.png";
import WirelessEarbuds from "../assets/image/wirelessEarbuds.png";
import phoneCase from "../assets/image/phoneCase.png";
import map from "../assets/image/map.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';


function Home({ addToCart }) {
    const featuredProducts = [
        { id: 1, image: wirelessCharger, name: "Wireless Charger", originalPrice: "$" + 29.99, offerPrice: "$" + 18.99 },
        { id: 2, image: powerBank, name: "Power Bank", originalPrice: "$" + 39.99, offerPrice: "$" + 29.99 },
        { id: 3, image: WirelessEarbuds, name: "Wireless Earbuds", originalPrice: "$" + 99.99, offerPrice: "$" + 79.99 },
        { id: 4, image: phoneCase, name: "Phone Case", originalPrice: "$" + 19.99, offerPrice: "$" + 14.99 },
    ];

    const navigate = useNavigate();
    const goToShop = () => {
        navigate("/shop");
    };
    return (
        <>
            <Navbar />
            <div className="full-width-container">
                {/* Header Section */}
                <section className="header row p-3">
                    <div className='col-md-6 p-5'>
                        <h1 className='mb-4'>NextGen Accessories</h1>
                        <p>Discover premium-quality ⚡ chargers, 🎧 earbuds, 📱 phone cases, and 🔋 power banks — crafted for style, durability, and performance. Keep your device protected, powered, and always ready 🌍 wherever life takes you.</p>
                        <button className="btn btn-secondary mt-3" onClick={goToShop}>🛒 Shop Now</button>

                    </div>
                    <div className='col-md-6'>
                        <img src={headerImage} className='img-fluid' alt="Header" />
                    </div>
                </section>

                {/* Featured Products */}
                <hr />
                <div className="mt-5 p-3">
                    <div className='d-flex flex-wrap justify-content-between'>
                        <h3 className='featuredProduct'>Featured Products</h3>
                        <button className='viewall' onClick={goToShop}>View All</button>
                    </div>
                    <div className='d-flex flex-wrap justify-content-around'>
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="items text-center m-2">
                                <img className='cart-image mb-3' src={product.image} width={200} height={200} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p className='text-muted text-decoration-line-through'>{product.originalPrice}</p>
                                <p>{product.offerPrice}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />

                {/* About us */}
                <div className='text-center p-3'>
                    <h3 className='mb-3'>About Us</h3>
                    <p> At <b>NextGen Accessories</b>, we believe your devices deserve the best. From premium wireless chargers to durable phone cases and high-quality earbuds,we design accessories that combine style, innovation, and performance. Our mission is simple — to keep you connected, powered, and protected wherever life takes you.</p>
                    <hr />
                </div>

                {/* Contact section */}
                <div className='contact row'>
                    <div className='col-md-1'></div>
                    <div className='text-center mt-5 col-md-5'>
                        <h4>Contact Us</h4>
                        <p>123 Tech Street, New York, USA</p>
                        <p><a href="mailto:support@nextgenaccessories.com">support@nextgenaccessories.com</a></p>
                        <p><a href="tel:+191234567890">+1 912-345-67890</a></p>
                    </div>
                    <div className='mb-5 col-md-5'>
                        <img src={map} className='img-fluid contact-img'/>
                    </div>
                    <div className='col-md-1'></div>
                    <hr />
                </div>

                {/* Footer section */}
                <footer className='footer text-center'>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <a href="https://www.facebook.com/" target='blank'>Facebook</a> |
                        <a href="https://www.instagram.com/" target='blank'>Instagram</a> |
                        <a href="https://x.com/" target='blank'>Twitter</a> |
                        <a href="https://in.linkedin.com/" target='blank'>LinkedIn</a>
                    </div>
                    <div className="footer-rights mt-3">
                        <b>© 2025 NextGen Accessories. All rights reserved.</b>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Home;
