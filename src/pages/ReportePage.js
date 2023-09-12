import React from 'react';
import { AddEditProductForm, TableReport} from "../components/Reportes";

export function ReportePage() {
  return (
    <div>
        <h1>Entrar registro -Pages</h1>
        
        
        <TableReport></TableReport>
        <h1>Para probar el formulario despues lo volamos</h1>
        <AddEditProductForm />
    </div>
  )
}
