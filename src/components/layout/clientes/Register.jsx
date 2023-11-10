import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { RegisterForm } from "./RegisterForm"
import { useClientes } from "../../../hooks/useClientes";

export const Register = () => {

    const { clientes = [], initialForm } = useClientes();

    const [selected, setSelected] = useState(initialForm);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (id) {
            const cliente = clientes.find(u => u.id == id) || initialForm;
            setSelected(cliente);
        }
    }, [id])

    return (
        <div className="container my-4">

            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            { selected.id > 0 ? 'Editar' : 'Registrar'} Usuario
          </h1>


            <div className="row">
                <div className="col">
                    <RegisterForm selected={selected} />
                </div>
            </div>
        </div>
    )
}