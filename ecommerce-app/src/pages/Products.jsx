export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <input type="text" placeholder="Search products..." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {/* Example Product */}
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Product 1</h3>
          <p>$20</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

