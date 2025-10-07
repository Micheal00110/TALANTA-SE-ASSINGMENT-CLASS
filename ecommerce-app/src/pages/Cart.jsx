export default function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li>Product 1 - $20 <button>Remove</button></li>
        <li>Product 2 - $15 <button>Remove</button></li>
      </ul>
      <h3>Total: $35</h3>
      <button>Checkout</button>
    </div>
  );
}
