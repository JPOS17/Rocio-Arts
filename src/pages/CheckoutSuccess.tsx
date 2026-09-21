import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section className="section section--tall section--light">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">Order Confirmed</span>
          <h1 className="display-heading">Thank you!</h1>
          <p className="prose">
            Your order is confirmed and a receipt is on its way to your
            email. I'll follow up personally once it ships.
          </p>
          <Link to="/shop" className="btn btn--dark">
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;