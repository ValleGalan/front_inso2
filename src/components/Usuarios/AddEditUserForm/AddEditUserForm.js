import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  Typography,
  Grid,MenuItem,Select
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddEditUserForm.css";

export function AddEditUserForm(props) {
    const { onClose, onRefetch, user } = props;
//  const { addUser, updateUser } = useUser();
const [jerarquiaFormat, setJerarquiaFormat] = useState([]);
const [estadoFormat, setEstadoFormat] = useState([]);


  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
    try {


        onRefetch();
        onClose();
    } catch (error) {
        console.error(error);
    }
    },
});

    return (
    <form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            variant="outlined"
            label="DNI"
            type="number"
            name="dni"
            value={formik.values.dni}
            onChange={formik.handleChange}
        />
        <TextField
        name="nombre"
        label="Nombre"
        fullWidth
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        helperText={formik.touched.nombre && formik.errors.nombre}
        />
        <TextField
        name="apellido"
        label="Apellidos"
        fullWidth
        value={formik.values.apellido}
        onChange={formik.handleChange}
        error={formik.touched.apellido && Boolean(formik.errors.apellido)}
        helperText={formik.touched.apellido && formik.errors.apellido}
        />
        <TextField
        name="email"
        label="Correo electrónico"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
        name="username"
        label="Nombre de usuario"
        fullWidth
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
        name="password"
        label="Contraseña"
        type="password"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Direccion de domicilio"
            name="domicilio"
            value={formik.values.domicilio}
            onChange={formik.handleChange}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Numero de telefono o celular"
            type="number"
            name="num_celular"
            value={formik.values.num_celular}
            onChange={formik.handleChange}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Legajo"
            type="number"
            name="legajo"
            value={formik.values.legajo}
            onChange={formik.handleChange}
        />
        <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
            <Select
            label="Estado del usuario"
            name="estado"
            value={formik.values.estado}
            onChange={formik.handleChange}
            error={!!formik.errors.estado}
            displayEmpty
            >
            <MenuItem value="">
                <em>Seleccione el estado</em>
            </MenuItem>
            {estadoFormat.map((estado) => (
                <MenuItem key={estado.value} value={estado.value}>
                {estado.text}
                </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>

        <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
            <Select
            label="Jerarquia"
            name="jerarquia"
            value={formik.values.jerarquia}
            onChange={formik.handleChange}
            error={!!formik.errors.jerarquia}
            displayEmpty
            >
            <MenuItem value="">
                <em>Seleccione una jerarquia</em>
            </MenuItem>
            {jerarquiaFormat.map((jerarquia) => (
                <MenuItem key={jerarquia.value} value={jerarquia.value}>
                {jerarquia.text}
                </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>




        <FormControl component="fieldset" fullWidth>
        <Typography variant="subtitle1">Estado del usuario</Typography>
        <FormGroup row>
            <FormControlLabel
            control={
                <Checkbox
                name="is_active"
                checked={formik.values.is_active}
                onChange={formik.handleChange}
                />
            }
            label="Usuario activo"
            />
            <FormControlLabel
            control={
                <Checkbox
                name="is_staff"
                checked={formik.values.is_staff}
                onChange={formik.handleChange}
                />
            }
            label="Usuario administrador"
        />
        </FormGroup>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        {user ? "Actualizar" : "Crear"}
      </Button>
    </form>
  );
}

function initialValues(data) {
    return {
    username: data?.username || "",
    email: data?.email || "",
    nombre: data?.nombre || "",
    apellido: data?.apellido || "",
    password: "",
    is_active: data?.is_active || false,
    is_staff: data?.is_staff || false,
    };
}

function newSchema() {
    return Yup.object({
    username: Yup.string().required("El nombre de usuario es requerido"),
    email: Yup.string()
        .email("Ingresa un correo electrónico válido")
        .required("El correo electrónico es requerido"),
    nombre: Yup.string(),
    apellido: Yup.string(),
    password: Yup.string().required("La contraseña es requerida"),
    is_active: Yup.boolean().required("Selecciona el estado del usuario"),
    is_staff: Yup.boolean().required("Selecciona el estado del usuario"),
    });
}

function updateSchema() {
    return Yup.object({
    username: Yup.string().required("El nombre de usuario es requerido"),
    email: Yup.string()
        .email("Ingresa un correo electrónico válido")
        .required("El correo electrónico es requerido"),
    nombre: Yup.string(),
    apellido: Yup.string(),
    password: Yup.string(),
    is_active: Yup.boolean().required("Selecciona el estado del usuario"),
    is_staff: Yup.boolean().required("Selecciona el estado del usuario"),
    });
}