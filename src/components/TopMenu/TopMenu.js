import React from 'react'

import { AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
//import { useAuth } from "../../../hooks";

export function TopMenu() {
  //const { auth, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

/*   const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };
 */
  return (
      <AppBar color="" style={{ paddingLeft: "250px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>

        <IconButton aria-label="Cuenta del usuario"> <AccountCircle /> </IconButton>
        <Typography variant="body1" sx={{ mr: 2 }}> Juan Jimenez </Typography>

        <IconButton
          aria-label="Cerrar sesión"
          //onClick= {handleLogout}
          color="inherit"
        > <ExitToApp /></IconButton>
        <Typography variant="body1" sx={{ mr: 2 }}> Cerrar sesión</Typography>

      </Toolbar>
    </AppBar>
  );
}
