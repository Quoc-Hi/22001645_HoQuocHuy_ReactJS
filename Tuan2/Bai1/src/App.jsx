import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import Button from "./components/Button/Button";

function App() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* Product Card */}
      <ProductCard />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="primary">Primary</Button>
        <Button type="danger">Delete</Button>
        <Button type="success">Save</Button>
      </div>
    </div>
  );
}

export default App;
