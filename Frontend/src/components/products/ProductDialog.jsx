import { useEffect, useState } from "react";

import api from "@/services/api";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ProductDialog({
  open,
  setOpen,
  product,
  refreshProducts,
}) {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    sku: "",
    lowStockThreshold: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        description: product.description || "",
        category: product.category?._id || "",
        price: product.price || "",
        quantity: product.quantity || "",
        sku: product.sku || "",
        lowStockThreshold: product.lowStockThreshold || "",
      });
    } else {
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        sku: "",
        lowStockThreshold: "",
      });
    }
  }, [product]);

  async function fetchCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.categories);
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
  e.preventDefault();

  const payload = {
    ...formData,
    price: Number(formData.price),
    quantity: Number(formData.quantity),
    lowStockThreshold: Number(formData.lowStockThreshold),
  };

  try {
    if (product) {
      await api.put(`/products/${product._id}`, payload);
    } else {
      await api.post("/products", payload);
    }

    refreshProducts();
    setOpen(false);

  } catch (err) {
    console.log(err.response?.data);
  }
}

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-lg">

        <DialogHeader>
          <DialogTitle>
            {product ? "Edit Product" : "Add Product"}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <Label>Name</Label>

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          <div>

            <Label>Description</Label>

            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

          </div>

          <div>

            <Label>Category</Label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md border border-zinc-700 bg-zinc-950 p-2"
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat._id}
                >
                  {cat.name}
                </option>
              ))}

            </select>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <Label>Price</Label>

              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />

            </div>

            <div>

              <Label>Quantity</Label>

              <Input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <Label>SKU</Label>

              <Input
                name="sku"
                value={formData.sku}
                onChange={handleChange}
              />

            </div>

            <div>

              <Label>Low Stock Threshold</Label>

              <Input
                type="number"
                name="lowStockThreshold"
                value={formData.lowStockThreshold}
                onChange={handleChange}
              />

            </div>

          </div>

          <Button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700"
          >
            {product ? "Update Product" : "Create Product"}
          </Button>

        </form>

      </DialogContent>

    </Dialog>
  );
}

export default ProductDialog;