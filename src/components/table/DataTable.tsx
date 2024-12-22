"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import tableSvg from "../../assets/svgs/table-avatar.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/navigation";

const data: TableDataType[] = [
  {
    items: { name: "Oxygen concentrator....", id: "#28373", avatar: tableSvg },
    edd: "2024-08-07",
    price: 200,
    variant: "Blue",
    quantity: "100 pieces",
    amount: 2000,
  },
  {
    items: {
      name: "Mechanical ventilator....",
      id: "#28373",
      avatar: tableSvg,
    },
    edd: "2024-08-07",
    price: 350,
    variant: "NIL",
    quantity: "45 kg",
    amount: 2500,
  },
  {
    items: {
      name: "Patient Monitor",
      id: "#28373",
      avatar: tableSvg,
    },
    edd: "2024-08-07",
    price: 300,
    variant: "Blue",
    quantity: "30 Units",
    amount: 1500,
  },
  {
    items: {
      name: "Mechanical ventilator",
      id: "#28373",
      avatar: tableSvg,
    },
    edd: "2024-08-07",
    price: 200,
    variant: "Blue",
    quantity: "35 Units",
    amount: 1500,
  },
];

export type TableDataType = {
  amount: number;
  items: { name: string; id: string; avatar: StaticImport | string };
  variant: string;
  price: number;
  edd: string;
  quantity: string;
};

export const columns: ColumnDef<TableDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          console.log(value);
          row.toggleSelected(!!value);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "items",
    header: "Items",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-2 w-max">
        <Image src={row.original.items.avatar} alt={row.original.variant} />
        <div className="">
          <p>{row.original.items.name}</p>
          <p className="text-[#475367]">{row.original.items.id}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "variant",
    header: () => <div className="">Variant</div>,
    cell: ({ row }) => (
      <p className="text-[#344054] font-light">{row.getValue("variant")}</p>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => <div className="">Quantity</div>,
    cell: ({ row }) => (
      <div className="text-[#344054] font-light">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return (
        <div className="text-right text-[#344054] font-light">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return (
        <div className="text-right text-[#344054] font-light">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "edd",
    header: () => <div className="">Expected Delivery Date</div>,
    cell: ({ row }) => (
      <div className="text-[#344054] font-light">{row.getValue("edd")}</div>
    ),
  },
];

export function DataTableDemo() {
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full rounded-lg shadow-sm border p-4">
      <div className="flex items-center py-4">
        <h3 className="text-2xl font-semibold">Item(s)</h3>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {
                    router.push("/quote-response");
                  }}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center gap-4 justify-end my-3">
        <p className="text-base font-normal text-[#475367]">Sub Total</p>
        <p className="text-base font-normal text-[#475367]">$8,000.00</p>
      </div>
      <div className="flex items-center gap-4 justify-end my-3">
        <p className="text-base font-normal text-[#475367]">Total</p>
        <p className="text-base font-semibold text-[#475367]">$8,750.00</p>
      </div>
    </div>
  );
}