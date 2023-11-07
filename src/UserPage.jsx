import React from "react";
import { useTable, useSortBy } from "react-table";
import { fetchUserList } from "./utils";

export default function UserPage() {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "fullName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // We need to get 'sortBy' from the table state, then use it as an argument to fetch new data
    state: { sortBy }
  } = useTable(
    {
      columns,
      data,
      // we need to tell react-table that we will handle sorting manually
      manualSortBy: true
    },
    useSortBy
  );

  React.useEffect(() => {
    setData([]);
    setLoading(true);
    fetchUserList({ sortBy })
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sortBy]);
 
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {isLoading && <span>Loading..</span>}
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
