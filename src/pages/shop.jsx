import 'bootstrap/dist/css/bootstrap.min.css';
import './shop.css';
import Navbar from './navbar';
import { useState } from 'react';

import wirelessCharger from "../assets/image/Charger.png";
import powerBank from "../assets/image/powerBank.png";
import WirelessEarbuds from "../assets/image/wirelessEarbuds.png";
import phoneCase from "../assets/image/phoneCase.png";
import bluetooth from "../assets/image/bluetoothSpeaker.png";
import camLens from "../assets/image/cameraLens.png";
import fan from "../assets/image/miniFan.png";
import grip from "../assets/image/phoneGrip.png";
import selfiestick from "../assets/image/selfieStick.png";
import usb from "../assets/image/usb-type-c.png";
import vr from "../assets/image/VR.png";

function Shop({ addToCart, cart }) {  // receive cart as prop
    const featuredProducts = [
        { id: 1, image: wirelessCharger, name: "Wireless Charger", originalPrice: 29.99, offerPrice: 18.99 },
        { id: 2, image: powerBank, name: "Power Bank", originalPrice: 39.99, offerPrice: 29.99 },
        { id: 3, image: WirelessEarbuds, name: "Wireless Earbuds", originalPrice: 99.99, offerPrice: 79.99 },
        { id: 4, image: phoneCase, name: "Phone Case", originalPrice: 19.99, offerPrice: 14.99 },
        { id: 5, image: bluetooth, name: "Bluetooth Speaker", originalPrice: 59.99, offerPrice: 49.99 },
        { id: 6, image: camLens, name: "Camera Lens", originalPrice: 34.99, offerPrice: 21.99 },
        { id: 7, image: fan, name: "Portable Mini Fan", originalPrice: 24.99, offerPrice: 12.99 },
        { id: 8, image: grip, name: "Phone Grip", originalPrice: 14.99, offerPrice: 7.99 },
        { id: 9, image: selfiestick, name: "Selfie Stick", originalPrice: 39.99, offerPrice: 24.99 },
        { id: 10, image: usb, name: "Charging Cable", originalPrice: 29.99, offerPrice: 18.99 },
        { id: 11, image: vr, name: "VR Headset", originalPrice: 149.99, offerPrice: 99.99 },
        { id: 1, image: wirelessCharger, name: "Wireless Charger", originalPrice: 29.99, offerPrice: 18.99 },
        { id: 2, image: powerBank, name: "Power Bank", originalPrice: 39.99, offerPrice: 29.99 },
        { id: 3, image: WirelessEarbuds, name: "Wireless Earbuds", originalPrice: 99.99, offerPrice: 79.99 },
    ];

    const [quantities, setQuantities] = useState(
        featuredProducts.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (id, value) => {
        setQuantities({ ...quantities, [id]: Number(value) });
    };

    const handleAddToCart = (product) => {
        const isAlreadyInCart = cart.some((item) => item.id === product.id);
        if (isAlreadyInCart) {
            alert(`${product.name} is already in the cart!`);
        } else {
            const productWithQuantity = { ...product, quantity: quantities[product.id] };
            addToCart(productWithQuantity);
            alert(`${product.name} (Qty: ${quantities[product.id]}) added to cart successfully!`);
        }
    };

    return (
        <>
            <Navbar />
            <div className="full-width-shop-container">
                <div className="d-flex flex-wrap justify-content-around">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="shop-carts text-center">
                            <img className="shop-cart-image mb-3" src={product.image} width={200} height={200} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="text-muted text-decoration-line-through">${product.originalPrice.toFixed(2)}</p>
                            <p>${product.offerPrice.toFixed(2)}</p>

                            <div className="mb-2">
                                <label>Qty: </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[product.id]}
                                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                    style={{ width: '60px', textAlign: 'center' }}
                                />
                            </div>

                            <button onClick={() => handleAddToCart(product)} className="btn btn-secondary mt-2">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Shop;
