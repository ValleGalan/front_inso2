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
    <AppBar position= "absolute">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} className="top-menu-texto">
        Top menu cambiara x pag
        </Typography>

        <IconButton aria-label="Cuenta del usuario"> <AccountCircle /> </IconButton>
        <Typography variant="body1" sx={{ mr: 2 }}> nombre user </Typography>

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
