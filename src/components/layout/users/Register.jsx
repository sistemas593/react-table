import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { RegisterForm } from "./RegisterForm"
import { useUsers } from "../../../hooks/useUsers";

export const Register = () => {

    const { users = [], initialForm } = useUsers();

    const [selected, setSelected] = useState(initialForm);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (id) {
            const user = users.find(u => u.id == id) || initialForm;
            setSelected(user);
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