import { useEffect, useState } from "react";
import api from "@/services/api";

import LowStockTable from "@/components/lowstock/LowStockTable";

function LowStock() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLowStock();
  }, []);

  async function fetchLowStock() {
    try {
      const response = await api.get("/products/low-stock");

      setProducts(response.data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Low Stock Alerts
        </h1>

        <p className="mt-2 text-zinc-400">
          Products that need to be restocked.
        </p>

      </div>

      <LowStockTable
        products={products}
        loading={loading}
      />

    </div>
  );
}

export default LowStock;