import { Link } from "react-router-dom";

const CheckoutCancel = () => {
  return (
    <section className="section section--tall section--light">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">Checkout Canceled</span>
          <h1 className="display-heading">No charge was made</h1>
          <p className="prose">
            Your checkout was canceled and nothing was charged. Come back
            whenever you're ready.
          </p>
          <Link to="/shop" className="btn btn--dark">
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCancel;
