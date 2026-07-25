import { Search, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CategoryToolbar({
  search,
  setSearch,
  onAddCategory,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:max-w-md">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <Input
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-zinc-900 border-zinc-800 text-white"
        />

      </div>

      <Button
        onClick={onAddCategory}
        className="bg-violet-600 hover:bg-violet-700"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Category
      </Button>

    </div>
  );
}

export default CategoryToolbar;