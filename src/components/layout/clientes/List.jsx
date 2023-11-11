import { useEffect, useState } from "react";
import Table from "../Table";
import React from 'react';
import { Paginator } from "../Paginator";

import { RegisterModalForm } from "./RegisterModalForm";
import { useClientes } from "../../../hooks/useClientes";

export const List = () => {

    //console.log('clientes')  
    //const { page } = useParams();
    const [page, setPage] = useState(0);

    const {
        clientes,
        visibleForm,
        isLoading,
        paginator,
        handlerOpenForm,
        getPage,
        
    } = useClientes();

    const columns = React.useMemo(
		() => [
		  {Header: "Cliente",accessor: "cliente",},
          {Header: "Identificacion",accessor: "numeroIdentificacion",},
          
		],
		[]
	  );

    useEffect(() => {
        getPage(page);
    }, [, page]);
    
    return (
        
        <>

{!visibleForm ||
                <RegisterModalForm />}
                
            <div className="container mx-auto">
                <div className="row">
                    <div className="col">
                        {(visibleForm ) || 
                        
                        <button
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handlerOpenForm}>
                            Nuevo
                        </button>                        
                        }

                        {
                            clientes.length === 0
                                ? <div className="alert alert-warning">No hay registros!</div>
                                : <>
                                    <Table columns={columns} data={clientes} />
                         
                                    <Paginator url="/clientes/page" paginator={paginator}  page={page} setPage={setPage}/>


                                </>
                        }
                    </div>
                </div>
            </div>
 

       </>
    );
}


/*



*/