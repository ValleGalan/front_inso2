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
  Avatar,
} from "@mui/material";
import { Edit, Close as CloseIcon, Check as CheckIcon } from "@mui/icons-material";
import { map } from "lodash";
import "./TableReport.css";

export function TableReport(props) {
  const { reportes, updateReporte, deleteReporte } = props;

  return (
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
