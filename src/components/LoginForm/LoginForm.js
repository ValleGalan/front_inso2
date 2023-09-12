import React from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik"; //vaidacion del formulario
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi } from "../../api/user";
//import { useAuth } from "../../../hooks";
import "./LoginForm.css";

export function LoginForm() {
//  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(), //esquema de validacion
    onSubmit: async (formValues) => {
      try {
        const response = await loginApi(formValues);
        const { access } = response;
       // login(access);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={6} md={8}>
          <form onSubmit={formik.handleSubmit} className="login-form-admin">
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Correo electronico"
              variant="outlined"
              value={formik.values.email} //valor del email
              onChange={formik.handleChange} //cambios que se haga
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Contraseña"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Iniciar sesión
            </Button>
          </form>
      </Grid>
    </Grid>
  );
}

function initialValues() { //login
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Correo electrónico no válido").required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });
}

/*
function intialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {  //con true se marca con rojo
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}

*/