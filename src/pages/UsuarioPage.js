import React from 'react';
import { AddEditUserForm, TableUser} from "../components/Usuarios";

export function UsuarioPage() {
  return (
    <div>
        <h1>Entrar registro usuarios -Pages</h1>
        
        
        <TableUser></TableUser>
        <h1>Para probar el formulario despues lo volamos</h1>
        
        <div className='add-edit-form'> 
          <AddEditUserForm /> 
        </div>
        
    </div>
  )
}
