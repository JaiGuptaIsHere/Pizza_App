import "./Footer.css";
import { useState } from "react";

function Footer(props) {
  const [showOrders, setShowOrders] = useState(false);

  
  function cartButtonHandler() {
    setShowOrders(!showOrders);
  }

  return (
    <div className="footer">
      <p className="thanksMessage">Thanks For Visiting Our Website...</p>
      {props.pizzasToBuy.length > 0 && (
        <button className="cartButton" onClick={cartButtonHandler}>
          Go To Cart
        </button>
      )}
    </div>
  );
}

export default Footer;
