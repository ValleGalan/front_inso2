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
  IconButton, TextField, Grid
} from "@mui/material";
import { Edit, Close as CloseIcon } from "@mui/icons-material";
import { map } from "lodash";
import "./TableReport.css";

export function TableReport(props) {
  const { reportes, updateReporte, deleteReporte } = props;
  /*
  
    const [searchTerm, setSearchTerm] = useState(""); 
  
    const filteredReportes = reportes.filter((reporte) =>
      reporte.num_reporte.includes(searchTerm) ||
      reporte.prioridad.includes(searchTerm) ||
      reporte.categoria.includes(searchTerm) || 
      reporte.investigador.includes(searchTerm) || 
      reporte.estado.includes(searchTerm) 
    );
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  */
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
          Registrar Reporte
        </Button>
      </div>
      <TableContainer component={Paper} className="table-product-admin">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Numero de Reporte</TableCell>
              <TableCell>Prioridad</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Investigador</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {map(reportes, (reporte, index) => (
              <TableRow key={index}>
                <TableCell>{reporte.num_reporte}</TableCell>
                <TableCell>{reporte.prioridad} </TableCell>
                <TableCell>{reporte.categoria}</TableCell>
                <TableCell>{reporte.investigador}</TableCell>
                <TableCell>{reporte.estado}</TableCell>

                <TableCell>
                  <Actions
                    reporte={reporte}
                    updateReporte={updateReporte}
                    deleteReporte={deleteReporte}
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
  const { reporte, updateReporte, deleteReporte } = props;

  return (
    <div>
      <IconButton
        aria-label="Editar"
        onClick={() => updateReporte(reporte)}
        color="primary"
      >
        <Edit />
      </IconButton>
      <IconButton
        aria-label="Eliminar"
        onClick={() => deleteReporte(reporte)}
        color="secondary"
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}
