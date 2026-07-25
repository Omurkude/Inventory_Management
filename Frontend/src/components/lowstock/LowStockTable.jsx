import { TriangleAlert } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function LowStockTable({ products, loading }) {
  if (loading) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">

        <TriangleAlert
          size={48}
          className="mx-auto text-green-500"
        />

        <h3 className="mt-4 text-xl font-semibold text-white">
          No Low Stock Products
        </h3>

        <p className="mt-2 text-zinc-400">
          Everything is well stocked.
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
              Product
            </TableHead>

            <TableHead className="text-zinc-300">
              Category
            </TableHead>

            <TableHead className="text-zinc-300">
              Quantity
            </TableHead>

            <TableHead className="text-zinc-300">
              Threshold
            </TableHead>

            <TableHead className="text-zinc-300">
              Status
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {products.map((product) => (

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
                {product.quantity}
              </TableCell>

              <TableCell className="text-zinc-300">
                {product.lowStockThreshold}
              </TableCell>

              <TableCell>

                <Badge className="bg-orange-600 hover:bg-orange-700">
                  Low Stock
                </Badge>

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}

export default LowStockTable;