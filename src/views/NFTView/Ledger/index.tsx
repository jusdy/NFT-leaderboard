import { useMemo, useState } from "react";
import {
  // Column,
  // Table as ReactTable,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

import { makeData, Person } from "./makeData";

const NFTs = () => {
  // const rerender = useReducer(() => ({}), {})[1];

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "position",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.NFTId,
            id: "NFTId",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id,
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "earnings",
                header: () => <span>Earnings</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "salePrice",
                header: "salePrice",
                footer: (props) => props.column.id,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(100));
  // const refreshData = () => setData(() => makeData(100));
  // console.log(refreshData)

  return (
    <div className=" w-full h-full overflow-auto scrollbar">
      <Table
        {...{
          data,
          columns,
        }}
      />
      {/* <hr />
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div> */}
    </div>
  );
};

export default NFTs;

function Table({
  data,
  columns,
}: {
  data: Person[];
  columns: ColumnDef<Person>[];
}) {
  const [pageSize, setPage] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  const headers = [
    "POSITION",
    "NFT ID",
    "POINTS",
    "EARNINGS",
    "SALE/PRICE",
  ]

  return (
    <div className="flex flex-col pt-[20px]">

      <h1 className="font-molot text-4xl text-center">NFT LEDGER</h1>

      <table className="mt-[30px]">
        <thead>
          <tr>
            {headers.map((item, key) =>
              <th key={key} className="text-2xl font-normal py-[40px] border-2 border-secondary">{item}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowKey) => {
            return (
              <tr key={row.id} className="font-molot text-xl font-normal">
                {row.getVisibleCells().map((cell, cellKey) => {
                  return (
                    <td className={`${rowKey % 2 === 0 ? 'bg-[#222550]' : ''}
                        ${cellKey === 1 || cellKey === 4 ? 'text-theme underline decoration-1 underline-offset-2' : ''}
                        min-w-[150px] py-[15px] text-center border-[2px] border-secondary`} key={cell.id}>
                      { flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center justify-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            // defaultValue={table.getState().pagination.pageIndex + 1}
            value={pageIndex}
            onChange={(e) => {
              if(Number(e.target.value) < 1 || Number(e.target.value) > (100 / pageSize)) return;
              setPageIndex(Number(e.target.value))
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          className="bg-transparent"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            setPage(Number(e.target.value));
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize} className="bg-darkbg">
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </div>
  );
}

// function Filter({
//   column,
//   table,
// }: {
//   column: Column<any, any>;
//   table: ReactTable<any>;
// }) {
//   const firstValue = table
//     .getPreFilteredRowModel()
//     .flatRows[0]?.getValue(column.id);

//   const columnFilterValue = column.getFilterValue();

//   return typeof firstValue === "number" ? (
//     <div className="flex space-x-2">
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[0] ?? ""}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [
//             e.target.value,
//             old?.[1],
//           ])
//         }
//         placeholder={`Min`}
//         className="w-24 border shadow rounded"
//       />
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[1] ?? ""}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [
//             old?.[0],
//             e.target.value,
//           ])
//         }
//         placeholder={`Max`}
//         className="w-24 border shadow rounded"
//       />
//     </div>
//   ) : (
//     <input
//       type="text"
//       value={(columnFilterValue ?? "") as string}
//       onChange={(e) => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//       className="w-36 border shadow rounded"
//     />
//   );
// }
