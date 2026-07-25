import { Pencil, Trash2, FolderOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CategoryTable({
  categories,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
        Loading categories...
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">

        <FolderOpen
          size={48}
          className="mx-auto text-zinc-600"
        />

        <h3 className="mt-4 text-xl font-semibold text-white">
          No Categories Found
        </h3>

        <p className="mt-2 text-zinc-400">
          Create your first category.
        </p>

      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

      <Table>

        <TableHeader>

          <TableRow className="border-zinc-800">

            <TableHead className="text-zinc-300">
              Name
            </TableHead>

            <TableHead className="text-zinc-300">
              Description
            </TableHead>

            <TableHead className="text-right text-zinc-300">
              Actions
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {categories.map((category) => (

            <TableRow
              key={category._id}
              className="border-zinc-800"
            >

              <TableCell className="font-medium text-white">
                {category.name}
              </TableCell>

              <TableCell className="text-zinc-300">
                {category.description || "-"}
              </TableCell>

              <TableCell>

                <div className="flex justify-end gap-2">

                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => onEdit(category)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => onDelete(category._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                </div>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}

export default CategoryTable;