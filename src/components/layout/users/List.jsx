import { useEffect, useState } from "react";
import { Paginator } from "../Paginator";
import React from 'react';
import { useUsers } from "../../../hooks/useUsers";
import Table from "../Table";

export const List = () => {

    const [page, setPage] = useState(0);

    const {
        users,
        paginator,
        getPage,        
    } = useUsers();

    const columns = React.useMemo(
		() => [
		  {Header: "Username",accessor: "username",},
		  {Header: "Email",accessor: "email",},
		],
		[]
	  );
    
    useEffect(() => {
        getPage(page);
    }, [, page]);
    
    
    return (
        <>
                
                <div class="container mx-auto">
                <div className="row">
                    <div className="col">

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay registros!</div>
                                : <>
                                    
                                    <Table columns={columns} data={users} />

                                    <Paginator url="/users/page" paginator={paginator}  page={page} setPage={setPage}/>


                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


/*

            <GlobalFilter 
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
            
            />

*/

/*


if (isLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

            {!visibleForm ||
                <RegisterModalForm />}



                        {(visibleForm ) || 
                        
                        <button
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handlerOpenForm}>
                            Nuevo   
                        </button>                        
                        }


*/