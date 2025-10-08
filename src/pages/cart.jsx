import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
    const navigate = useNavigate();
    const purchase = () => {
        navigate("/payment");
    };

    return (
        <div>
            <Navbar />
            <div>
                {cart.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                        <h1>Your cart is empty.</h1>
                    </div>
                ) : (
                    <div className='cart-items-container'>
                        {cart.map((item, index) => (
                            <div key={index} className='text-center cart-items'>
                                <img src={item.image} width={200} height={200} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p className='text-muted text-decoration-line-through'>{item.originalPrice}</p>
                                <p>{item.offerPrice}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={purchase} className='btn btn-secondary mt-1'>Purchase</button><br />
                                <button onClick={() => removeFromCart(item.id)} className='btn btn-secondary mt-1'>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
