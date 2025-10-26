import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';
import { useState } from 'react';

function Payment({ cart }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, address, cardNumber, expiry, cvv } = formData;

    // ✅ Step 1: Check empty fields
    if (!firstName || !lastName || !email || !address || !cardNumber || !expiry || !cvv) {
      alert("⚠️ Please fill out all fields.");
      return;
    }

    // ✅ Step 2: Validate email (custom, since HTML validation is disabled)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("❌ Invalid email address. Example: user@example.com");
      return;
    }

    // ✅ Step 3: Validate card details
    const cardPattern = /^\d{16}$/;
    const cvvPattern = /^\d{3}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!cardPattern.test(cardNumber.replace(/\s/g, ''))) {
      alert("❌ Invalid card number. Must be 16 digits.");
      return;
    }

    if (!expiryPattern.test(expiry)) {
      alert("❌ Invalid expiry format. Use MM/YY.");
      return;
    }

    if (!cvvPattern.test(cvv)) {
      alert("❌ Invalid CVV. Must be 3 digits.");
      return;
    }

    // ✅ Step 4: Success message
    alert("✅ Order Placed Successfully!");

    // ✅ Step 5: Clear all inputs after success
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    });
  };

  const subtotal = cart.reduce((acc, item) => acc + item.offerPrice * item.quantity, 0);
  const total = subtotal;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 payment-bg">
      <div className="payment-container p-5 shadow rounded">
        <h1 className="payment-heading text-center mb-4">Billing Details</h1>

        <form onSubmit={handleSubmit} noValidate>
          <input
            className="form-control mb-2"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="form-control mb-2"
            name="email"
            type="text" // 🔹 use text instead of email (custom validation)
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            name="address"
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <h2 className="payment-heading text-center mb-3">Order Summary</h2>
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

          <div className="d-flex justify-content-between mb-4 fw-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <h2 className="payment-heading text-center mb-3">Payment Details</h2>

          <div className="input-group mb-3">
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              placeholder="1234567812345678"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            <span className="input-group-text">💳</span>
          </div>

          <div className="d-flex gap-2 mb-3">
            <input
              className="form-control"
              name="expiry"
              type="text"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
            />
            <input
              className="form-control"
              name="cvv"
              type="password"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
