import React, { useState, useEffect } from "react";
import { HeaderPage } from "../components";
import { useUser } from "../hooks/useUser";
import { AddEditUserForm, TableUser } from "../components/Usuarios";
import {
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";

export function UsuarioPage() {
 

  return (
   <div>
    
    <TableUser />
    <AddEditUserForm ></AddEditUserForm>
   </div>
 
  );
}
/*
<Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Paper elevation={3}>
            <TableUser />
          </Paper>
        )}
      </Grid>
*/