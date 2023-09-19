import React, { useState, useEffect, useCallback } from "react";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    Typography,
    Grid, MenuItem, Select
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddEditUserForm.css";
import { addUserApi } from "../../../services/UserService";
import { Jerarquia, Estado_Usuario,Rol } from "../../../utils/enums";




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

                const response = await addUserApi(formValue);
                if (response.status === "success") {
                    console.log("Datos guardados con éxito");
                    // Puedes hacer algo más aquí, como redirigir al usuario a otra página
                    onRefetch(); // Actualiza la lista de usuarios después de guardar
                    onClose(); // Cierra el formulario después de guardar
                } else {
                    // Hubo un error en el servidor
                    console.error("Error al guardar los datos en el servidor");
                }
            } catch (error) {
                console.error("Error al realizar la solicitud:", error);
            }
        },
    });
    //

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2 className="texto-azul"> Registrar Usuario</h2>
            <div className="form-row">
                <TextField
                    fullWidth
                    variant="outlined"
                    label="DNI"
                    type="number"
                    name="dni"
                    value={formik.values.dni}
                    onChange={formik.handleChange}
                    error={!!formik.errors.dni}
                    helperText={formik.errors.dni}
                    style={{ marginBottom: "16px" }}
                />

                <div className="form-row">
                    <TextField
                        name="nombre"
                        label="Nombre"
                        fullWidth
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                        style={{ marginBottom: "16px" }}
                    />

                    <TextField
                        name="apellido"
                        label="Apellido"
                        fullWidth
                        value={formik.values.apellido}
                        onChange={formik.handleChange}
                        error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                        helperText={formik.touched.apellido && formik.errors.apellido}
                        style={{ marginBottom: "16px" }}
                    />
                </div>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Fecha de Nacimiento"
                    type="date" // Asegúrate de utilizar el tipo "date" para la entrada de fecha
                    name="fecha_nacimiento" // Asegúrate de utilizar el nombre "fecha_nacimiento"
                    value={formik.values.fecha_nacimiento}
                    onChange={formik.handleChange}
                    style={{ marginBottom: "16px" }}
                />

                <TextField
                    name="correo"
                    label="Correo electrónico"
                    fullWidth
                    value={formik.values.correo}
                    onChange={formik.handleChange}
                    error={formik.touched.correo && Boolean(formik.errors.correo)}
                    helperText={formik.touched.correo && formik.errors.correo}
                    style={{ marginBottom: "16px" }}
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
                    style={{ marginBottom: "16px" }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Direccion de domicilio"
                    name="domicilio"
                    value={formik.values.domicilio}
                    onChange={formik.handleChange}
                    style={{ marginBottom: "16px" }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Numero de telefono o celular"
                    type="number"
                    name="num_contacto"
                    value={formik.values.num_contacto}
                    onChange={formik.handleChange}
                    style={{ marginBottom: "16px" }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Legajo"
                    type="number"
                    name="legajo"
                    value={formik.values.legajo}
                    onChange={formik.handleChange}
                    style={{ marginBottom: "16px" }}
                />

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
                    {Object.values(Estado_Usuario).map((estado) => (
                        <MenuItem key={estado} value={estado}>
                            {estado}
                        </MenuItem>
                    ))}
                </Select>

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
                    {Object.values(Jerarquia).map((jerarquia) => (
                        <MenuItem key={jerarquia} value={jerarquia}>
                            {jerarquia}
                        </MenuItem>
                    ))}
                </Select>

                <FormControl fullWidth variant="outlined" style={{ marginBottom: "16px" }}>
                    <Select
                        label="Rol del usuario"
                        name="rol_usuario"
                        value={formik.values.rol_usuario}
                        onChange={formik.handleChange}
                        error={!!formik.errors.rol_usuario}
                        displayEmpty
                    >
                        <MenuItem value="">
                            <em>Seleccione una rol_usuario </em>
                        </MenuItem>
                        {Object.values(Rol).map((rol_usuario) => (
                            <MenuItem key={rol_usuario} value={rol_usuario}>
                                {rol_usuario}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    {user ? "Actualizar" : "Crear"}
                </Button>
            </div>
        </form>
    );
}

function initialValues(data) {
    return {
        dni: data?.dni || "",
        correo: data?.correo || "",
        nombre: data?.nombre || "",
        apellido: data?.apellido || "",
        password: "",
        domicilio: data?.domicilio || "",
        num_contacto: data?.num_contacto || "",
        legajo: data?.legajo || "",
        estado: data?.estado || "",
        jerarquia: data?.jerarquia || "",
        rol_usuario: data?.rol_usuario || "",
        //is_active: data?.is_active || false,
        //is_staff: data?.is_staff || false,
    };
}

function newSchema() {
    return {
        dni: Yup.number().required("El dni del usuario es requerido"),
        nombre: Yup.string().required("El nombre es requerido"),
        apellido: Yup.string().required("El apellido es requerido"),
        correo: Yup.string()
            .email("Ingresa un correo electrónico válido")
            .required("El correo electrónico es requerido"),
        password: Yup.string().required("La contraseña es requerida"),
        //estado: Yup.string().required("El estado es requerido"),
        //is_active: Yup.boolean().required("Selecciona el estado del usuario"),
        //is_staff: Yup.boolean().required("Selecciona el estado del usuario"),
    };
}

function updateSchema() {
    return {
        dni: Yup.number(),
        nombre: Yup.string(),
        apellido: Yup.string(),
        correo: Yup.string()
            .correo("Ingresa un correo electrónico válido")
            .required("El correo electrónico es requerido"),
        password: Yup.string().required("La contraseña es requerida"),
        //estado: Yup.string().required("El estado es requerido"),
        // is_active: Yup.boolean().required("Selecciona el estado del usuario"),
        //is_staff: Yup.boolean().required("Selecciona el estado del usuario"),
    };
}

/*
 <FormControl component="fieldset" fullWidth style={{ marginBottom: "16px" }}>
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
            label="Usuario secretario"
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
*/