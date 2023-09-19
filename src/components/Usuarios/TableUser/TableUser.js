import React, { useState } from "react";
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
import { Refresh as RefreshIcon } from "@mui/icons-material";

export function TableUser(props) {
  const { usuarios, updateUsuario, deleteUsuario } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsuarios, setFilteredUsuarios] = useState(usuarios || []); // Inicializar con un arreglo vacío si usuarios es undefined

  // Función para actualizar la lista filtrada cuando se cambia el término de búsqueda.
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = (usuarios || []).filter((usuario) =>
      usuario.apellido.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsuarios(filtered);
  };

  return (
    <div>
      <div className="form-row" style={{ marginBottom: "16px" }}>
        <TextField
          label="Buscar"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
          placeholder="Apellido, DNI, Estado"
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
             
                <TableRow >
                  <TableCell>123</TableCell>
                  <TableCell>John </TableCell>
                  <TableCell>Doe</TableCell>
                  <TableCell>23867432</TableCell>
                  <TableCell>ADMINISTRADOR</TableCell>
                  <TableCell>3889584344</TableCell>
                  <TableCell>HABILITADO</TableCell>
                  <TableCell>
                    <IconButton aria-label="Actualizar" >
                      <RefreshIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell>231</TableCell>
                  <TableCell>Maria </TableCell>
                  <TableCell>Gonzalez</TableCell>
                  <TableCell>34567192</TableCell>
                  <TableCell>SECRETARIO</TableCell>
                  <TableCell>38894854</TableCell>
                  <TableCell>HABILITADO</TableCell>

                  <TableCell>
                    <IconButton aria-label="Actualizar" >
                      <RefreshIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow >
                  <TableCell>453</TableCell>
                  <TableCell>Carla </TableCell>
                  <TableCell>Vaca</TableCell>
                  <TableCell>27383754</TableCell>
                  <TableCell>SECRETARIO</TableCell>
                  <TableCell>38849202</TableCell>
                  <TableCell>HABILITADO</TableCell>

                  <TableCell>
                    <IconButton aria-label="Actualizar">
                      <RefreshIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
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


/*

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
*/