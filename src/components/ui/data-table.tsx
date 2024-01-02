"use client";

import { Button } from "@/components/ui/button";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/shadcn";
import { t } from "i18next";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean; // when fetching data
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  currentPage,
  setCurrentPage,
  totalPages,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    pageCount: 10,
    state: {
      rowSelection,
      pagination: {
        pageIndex: currentPage - 1,
        pageSize: 10,
      },
    },
  });

  return (
    <div>
      <div className="rounded-md border pr-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className={cn(
                        `${t("common.dir") === "rtl" ? "text-right" : ""}`
                      )}
                      key={header.id}
                    >
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
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {isLoading ? (
                        <Skeleton key={row.id} className="h-8" />
                      ) : (
                        <>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </>
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
                  لا يوجد بيانات
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center items-center gap-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            table.previousPage();
            setCurrentPage(currentPage - 1);
          }}
          disabled={!table.getCanPreviousPage() || isLoading}
        >
          {t("pagination.previous")}
        </Button>
        <span>
          {table.getState().pagination.pageIndex + 1} {t("pagination.of")}{" "}
          {(totalPages && totalPages / 10) || 0}
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            table.nextPage();
            setCurrentPage(currentPage + 1);
          }}
          disabled={!table.getCanNextPage() || isLoading}
        >
          {t("pagination.next")}
        </Button>
      </div>
    </div>
  );
}
