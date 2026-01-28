import "./App.css";
import { useState } from "react";

import ProductCard from "./components/ProductCard/ProductCard";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
  const [alertType, setAlertType] = useState("");

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
      {/* Bài 1: Product Card */}
      <ProductCard />

      {/* Bài 2: Button */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="primary">Primary</Button>
        <Button type="danger">Delete</Button>
        <Button type="success">Save</Button>
      </div>

      {/* Bài 3: Alert */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="success" onClick={() => setAlertType("success")}>
          Success
        </Button>
        <Button type="primary" onClick={() => setAlertType("warning")}>
          Warning
        </Button>
        <Button type="danger" onClick={() => setAlertType("error")}>
          Error
        </Button>
      </div>

      <Alert
        type={alertType}
        message={alertType && `This is a ${alertType} message`}
      />
    </div>
  );
}

export default App;