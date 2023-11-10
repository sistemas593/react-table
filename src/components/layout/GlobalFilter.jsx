import { React, useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination   } from 'react-table'  // new PASO 4

export const GlobalFilter= ({  

  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,


    }) => {  

      const count = preGlobalFilteredRows.length
      const [value, setValue] = ''

    return (
      <span>
        Search:{' '}
        <input />
      </span>
    )
  }
