import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';

function Payment({ cart }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
            alert("Order Placed Successfully");
        } else {
            form.reportValidity();
        }
    }

    // Calculate subtotal and total
    const subtotal = cart.reduce((acc, item) => acc + item.offerPrice * item.quantity, 0);
    const total = subtotal; // Add taxes/shipping if needed

    return (
        <div className="d-flex justify-content-center vh-100">
            <div className="payment-container p-5">
                <h1 className='payment-heading text-center'>Billing Details</h1>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-2" type="text" placeholder="First Name" required />
                    <input className="form-control mb-2" type="text" placeholder="Last Name" required />
                    <input className="form-control mb-2" type="email" placeholder="Email" required />
                    <input className="form-control mb-3" type="text" placeholder="Address" />

                    <h1 className='payment-heading text-center'>Order Summary</h1>

                    <div className="mb-3">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="d-flex justify-content-between">
                                    <p>{item.name} x {item.quantity}</p>
                                    <p>${(item.offerPrice * item.quantity).toFixed(2)}</p>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>

                    <div className="payment-heading text-center mb-3">
                        Payment Details
                    </div>

                    {/* Card input with icon */}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="1234 5678 9012 3456" required />
                        <span className="input-group-text">💳</span>
                    </div>

                    <div className="d-flex gap-2 mb-3">
                        <input className="form-control" type="text" placeholder="MM / YY" required />
                        <input className="form-control" type="password" placeholder="CVV" required />
                    </div>

                    <button type='submit' className="btn btn-secondary w-100">Place Order</button>
                </form>
            </div>
        </div>
    );
}

export default Payment;
