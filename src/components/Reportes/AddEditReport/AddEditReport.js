import React, { useState, useEffect, useCallback } from "react";
import {
FormControl, TextField, Button, Select,MenuItem, Checkbox, FormControlLabel, Grid} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
//import "./AddEditReportForm.css";
import {
  Jerarquia,
  Prioridad,
  Categoria,
  Estado,
  TipoReporte,
  Rol,
  Estado_Usuario,
} from "../../../utils/enums";


export function AddEditReporteForm(props) {
    const { onClose, onRefetch, reporte } = props;
    const [categoriesFormat, setCategoriesFormat] = useState([]);
    const [prioridadFormat, setprioridadFormat] = useState([]);
    const [estadoFormat, setestadoFormat] = useState([]);

    //const { categories, getCategories } = useCategory();
    //const { addReporte, updateReporte } = useReporte();

    const formik = useFormik({
        initialValues: initialValues(reporte),
        validationSchema: Yup.object(reporte ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {

        onRefetch();
        onClose();
        },
    });

    return (
    <form className="add-edit-reporte-form" onSubmit={formik.handleSubmit}>
      <h2 className="texto-azul"> Registrar Reporte</h2>
      <div className="form-row"> 
            <TextField 
            fullWidth
            variant="outlined"
            label="Numero de reporte"
            type="number"
            name="num_reporte"
            value={formik.values.num_reporte}
            onChange={formik.handleChange}
            error={!!formik.errors.num_reporte}
            helperText={formik.errors.num_reporte}
            style={{ marginBottom: "16px" }}
            />

            <TextField
            fullWidth
            variant="outlined"
            label="Correo electronico"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
            style={{ marginBottom: "16px" }}
            />

            <TextField
            fullWidth
            variant="outlined"
            label="Nombre de usuario"
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={!!formik.errors.nombre}
            helperText={formik.errors.nombre}
            style={{ marginBottom: "16px" }}
            />

            <TextField
            fullWidth
            variant="outlined"
            label="Investigador Asignado"
            name="investigador"
            value={formik.values.investigador}
            onChange={formik.handleChange}
            style={{ marginBottom: "16px" }}
            />

            <FormControl fullWidth variant="outlined" style={{ marginBottom: "16px" }}>
            <Select
            label="Categoria"
            name="categoria"
            value={formik.values.categoria}
            onChange={formik.handleChange}
            error={!!formik.errors.categoria}
            displayEmpty
            >
            <MenuItem value="">
                <em>Seleccione una categoría</em>
            </MenuItem>
            {Object.values(TipoReporte).map((categoria) => (
                        <MenuItem key={categoria} value={categoria}>
                            {categoria}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>

            <TextField
            fullWidth
            variant="outlined"
            label="Numero de telefono"
            type="number"
            name="num_telefono"
            value={formik.values.num_telefono}
            onChange={formik.handleChange}
            style={{ marginBottom: "16px" }}
            />
            
            <div className="form-row">
            <TextField
            fullWidth
            variant="outlined"
            label="URL del perfil"
            name="url"
            value={formik.values.url}
            onChange={formik.handleChange}
            style={{ marginBottom: "16px" }}
            />
            <TextField
            fullWidth
            variant="outlined"
            label="IP del perfil"
            name="ip_perfil"
            value={formik.values.ip_perfil}
            onChange={formik.handleChange}
            style={{ marginBottom: "16px" }}
            />
            </div>

            <TextField
            fullWidth
            variant="outlined"
            label="Cantidad de archivos"
            type="number"
            name="cant_archivo"
            value={formik.values.cant_archivo}
            onChange={formik.handleChange}
            style={{ marginBottom: "16px" }}
            />

            <div className="form-row">

            <FormControl fullWidth variant="outlined" style={{ marginBottom: "16px" }}>
            <Select
            label="Estado de la investigación"
            name="estado"
            value={formik.values.estado}
            onChange={formik.handleChange}
            error={!!formik.errors.estado}
            displayEmpty
            >
            <MenuItem value="">
                <em>Seleccione el estado de la investigación</em>
            </MenuItem>
            {Object.values(Estado).map((estado) => (
                        <MenuItem key={estado} value={estado}>
                            {estado}
                        </MenuItem>
                    ))}
            </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" style={{ marginBottom: "16px" }}>
            <Select
            label="Prioridad"
            name="prioridad"
            value={formik.values.prioridad}
            onChange={formik.handleChange}
            error={!!formik.errors.prioridad}
            displayEmpty
            >
            <MenuItem value="">
                <em>Seleccione una prioridad </em>
            </MenuItem>
            {Object.values(Prioridad).map((prioridad) => (
                        <MenuItem key={prioridad} value={prioridad}>
                            {prioridad}
                        </MenuItem>
                    ))}
            </Select>
            </FormControl>
            </div>
            
        </div>

        <div className="form-row">
            <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            >
            Cancelar
            </Button>
            
            <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            >
            {reporte ? "Actualizar" : "Crear"}
            </Button>
        </div>

    </form>
  );
}

function formatDropdownData(data) {
  return data.map((item) => ({

  }));
}
//----------- validacion
function initialValues(data) { //datos de la tabla
  return {
    num_reporte: data?.num_reporte || "",
    email: data?.email || "",
    nombre: data?.nombre || "",
    investigador: data?.investigador || "",
    categoria: data?.categoria || "",
    num_telefono: data?.num_telefono || "",
    url: data?.url || "",
    ip_perfil: data?.ip_perfil || "",
    cant_archivo: data?.cant_archivo || "",
    estado: data?.estado || "",
    prioridad: data?.prioridad || "",

  };
}

function newSchema() {
  return {
    num_reporte: Yup.number().required("Campo requerido"),
    categoria: Yup.number().required("Campo requerido"),
  };
}

function updateSchema() {
  return {
    num_reporte: Yup.number().required("Campo requerido"),
    categoria: Yup.number().required("Campo requerido"),
  };
}
