import { Link, NavLink } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { usePagination } from 'react-table'  // new


export const Paginator = ({ url, paginator, page, setPage }) => {
  //console.log(paginator);
  //console.log(page);
  return (
    <>
 

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 items-center justify-between sm:hidden">

        <nav aria-label="Page navigation">
	<ul className="inline-flex space-x-2">

  <li>
      <button onClick={() => setPage(0)} 
      className={paginator.first 
      ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
      : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100 disabled"
    }>
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>

    <li>
      <button onClick={() => setPage(page - 1)} 
      className= {paginator.number == 0 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100 disabled"  
      }
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>

    <li>
      <button onClick={() => setPage(page + 1)} 
      className={paginator.last 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100 disabled" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"  
      }
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>

    <li>
      <button onClick={() => setPage( paginator.totalPages - 1 )} 
      className=
      {paginator.last 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100 disabled"  
        }      
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>


	</ul>
  </nav>    

        </div>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Mostrando del <span className="font-medium">1</span> al{" "}
              <span className="font-medium">10</span> de{" "}
              <span className="font-medium">97</span> registros
            </p>
          </div>


          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >

<nav aria-label="Page navigation">
	<ul className="inline-flex space-x-2">

  <li>
      <button onClick={() => setPage(0)} 
      className={paginator.first 
      ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
      : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"
    }>
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>


    <li>
      <button onClick={() => setPage(page - 1)} 
      className= {paginator.number == 0 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"  
      }
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>


    <li>
      <button onClick={() => setPage(page + 1)} 
      className={paginator.last 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"  
      }
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>

    <li>
      <button onClick={() => setPage( paginator.totalPages - 1 )} 
      className=
      {paginator.last 
        ? "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100" 
        : "flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100"  
        }      
      >
		<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" clipRule="evenodd" fillRule="evenodd">
        </path></svg>
    </button>
	  </li>


	</ul>
  </nav>


            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

/*
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Primera
        </a>


        <a href="#"
    class="inline-flex h-9 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </a>

  <p class="text-xs text-gray-900">
    3
    <span class="mx-0.25">/</span>
    12
  </p>


  <a href="#"
    class="inline-flex h-9 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </a>


  <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Ultima
        </a>

















        <div class="bg-white p-4 flex items-center flex-wrap">
  <nav aria-label="Page navigation">
	<ul class="inline-flex">
	  <li><button class="h-10 px-5 text-green-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-green-100">
		<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
	  </li>
	  <li><button class="h-10 px-5 text-green-600 transition-colors duration-150 focus:shadow-outline hover:bg-green-100">1</button></li>
	  <li><button class="h-10 px-5 text-white transition-colors duration-150 bg-green-600 border border-r-0 border-green-600 focus:shadow-outline">2</button></li>
	  <li><button class="h-10 px-5 text-green-600 transition-colors duration-150 focus:shadow-outline hover:bg-green-100">3</button></li>
	  <li><button class="h-10 px-5 text-green-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-green-100">
		<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
	  </li>
	</ul>
  </nav>
</div>
*/
