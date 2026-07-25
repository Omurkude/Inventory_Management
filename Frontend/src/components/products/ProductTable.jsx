import {
  Pencil,
  Trash2,
  TriangleAlert,
  CheckCircle,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ProductTable({
  products,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
        No products found.
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
              Category
            </TableHead>

            <TableHead className="text-zinc-300">
              Price
            </TableHead>

            <TableHead className="text-zinc-300">
              Quantity
            </TableHead>

            <TableHead className="text-zinc-300">
              Status
            </TableHead>

            <TableHead className="text-right text-zinc-300">
              Actions
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {products.map((product) => {

            const outOfStock = product.quantity === 0;

            const lowStock =
              product.quantity > 0 &&
              product.quantity <= product.lowStockThreshold;

            return (
              <TableRow
                key={product._id}
                className="border-zinc-800"
              >

                <TableCell className="font-medium text-white">
                  {product.name}
                </TableCell>

                <TableCell className="text-zinc-300">
                  {product.category?.name}
                </TableCell>

                <TableCell className="text-zinc-300">
                  ₹{product.price}
                </TableCell>

                <TableCell className="text-zinc-300">
                  {product.quantity}
                </TableCell>

                <TableCell>

                  {outOfStock ? (
                    <Badge variant="destructive">
                      <XCircle className="mr-1 h-3 w-3" />
                      Out of Stock
                    </Badge>
                  ) : lowStock ? (
                    <Badge className="bg-orange-600 hover:bg-orange-700">
                      <TriangleAlert className="mr-1 h-3 w-3" />
                      Low Stock
                    </Badge>
                  ) : (
                    <Badge className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      In Stock
                    </Badge>
                  )}

                </TableCell>

                <TableCell>

                  <div className="flex justify-end gap-2">

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => onEdit(product)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() =>
                        onDelete(product._id)
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>

                </TableCell>

              </TableRow>
            );
          })}

        </TableBody>

      </Table>

    </div>
  );
}

export default ProductTable;