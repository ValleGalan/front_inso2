import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField
} from "@mui/material";
import { Edit, Close as CloseIcon, Check as CheckIcon } from "@mui/icons-material";
import { map } from "lodash";
import "./TableUser.css";


export function TableUser(props) {
  const { usuarios, updateUsuario, deleteUsuario } = props;

  return (
    <div>
            <div className="form-row"  style={{ marginBottom: "16px" }}>
        <TextField
          label="Buscar"
          variant="outlined"
          fullWidth
          //value={searchTerm}
          //onChange={handleSearch}
          className="search-input"
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Registrar Usuario
        </Button>
      </div>

    
    <TableContainer component={Paper} className="table-product-admin">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Numero de Legajo</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>N° de contacto</TableCell>

            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {map(usuarios, (usuario, index) => (
            <TableRow key={index}>
              <TableCell>{usuario.legajo}</TableCell>
              <TableCell>{usuario.nombre} </TableCell>
              <TableCell>{usuario.apellidp}</TableCell>
              <TableCell>{usuario.dni}</TableCell>
              <TableCell>{usuario.rol}</TableCell>
              <TableCell>{usuario.num_contacto}</TableCell>

              <TableCell>{usuario.estado}</TableCell>

              <TableCell>
                <Actions
                  usuario={usuario}
                  updateUsuario={updateUsuario}
                  deleteUsuario={deleteUsuario}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

function Actions(props) {
  const { usuario, updateUsuario, deleteUsuario } = props;

  return (
    <div>
      <IconButton
        aria-label="Editar"
        onClick={() => updateUsuario(usuario)}
        color="primary"
      >
        <Edit />
      </IconButton>
      <IconButton
        aria-label="Eliminar"
        onClick={() => deleteUsuario(usuario)}
        color="secondary"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}
