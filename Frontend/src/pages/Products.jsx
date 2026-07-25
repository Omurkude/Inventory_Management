import { useEffect, useState } from "react";
import api from "@/services/api";

import ProductToolbar from "@/components/products/ProductToolbar";
import ProductTable from "@/components/products/ProductTable";
import ProductDialog from "@/components/products/ProductDialog";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");

      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleAddProduct() {
    setSelectedProduct(null);
    setOpen(true);
  }

  function handleEdit(product) {
    setSelectedProduct(product);
    setOpen(true);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Products
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage your inventory products.
        </p>

      </div>

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        onAddProduct={handleAddProduct}
      />

      <ProductTable
        products={filteredProducts}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProductDialog
        open={open}
        setOpen={setOpen}
        product={selectedProduct}
        refreshProducts={fetchProducts}
      />

    </div>
  );
}

export default Products;