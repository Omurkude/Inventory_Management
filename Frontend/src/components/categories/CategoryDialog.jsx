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

function CategoryDialog({
  open,
  setOpen,
  category,
  refreshCategories,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name || "",
        description: category.description || "",
      });
    } else {
      setFormData({
        name: "",
        description: "",
      });
    }
  }, [category]);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (category) {
        await api.put(`/categories/${category._id}`, formData);
      } else {
        await api.post("/categories", formData);
      }

      refreshCategories();
      setOpen(false);

    } catch (err) {
      console.error(err.response?.data || err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="bg-zinc-900 border-zinc-800 text-white">

        <DialogHeader>

          <DialogTitle>
            {category ? "Edit Category" : "Add Category"}
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

          <Button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700"
          >
            {category ? "Update Category" : "Create Category"}
          </Button>

        </form>

      </DialogContent>

    </Dialog>
  );
}

export default CategoryDialog;