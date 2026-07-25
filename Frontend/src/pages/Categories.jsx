import { useEffect, useState } from "react";
import api from "@/services/api";

import CategoryToolbar from "@/components/categories/CategoryToolbar";
import CategoryTable from "@/components/categories/CategoryTable";
import CategoryDialog from "@/components/categories/CategoryDialog";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCategories(filtered);
  }, [search, categories]);

  async function fetchCategories() {
    try {
      const response = await api.get("/categories");

      setCategories(response.data.categories);
      setFilteredCategories(response.data.categories);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleAddCategory() {
    setSelectedCategory(null);
    setOpen(true);
  }

  function handleEdit(category) {
    setSelectedCategory(category);
    setOpen(true);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/categories/${id}`);

      fetchCategories();

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Categories
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage your product categories.
        </p>

      </div>

      <CategoryToolbar
        search={search}
        setSearch={setSearch}
        onAddCategory={handleAddCategory}
      />

      <CategoryTable
        categories={filteredCategories}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CategoryDialog
        open={open}
        setOpen={setOpen}
        category={selectedCategory}
        refreshCategories={fetchCategories}
      />

    </div>
  );
}

export default Categories;