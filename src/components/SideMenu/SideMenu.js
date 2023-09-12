import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText,IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
//import { useAuth } from "../../../hooks";
import { Analytics,Article, LocationOn, NotificationsActive, PeopleAlt } from "@mui/icons-material";
import "./SideMenu.css";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();
    return (
    <div className="side-menu">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  //const { auth } = useAuth();

  return (
    <Drawer variant="permanent" className="side" anchor="left">
      <List>
        <h1>CYBERSLEUTH</h1>
        <ListItem button component={Link} to="/reporte" selected={pathname === "/reporte"}>
          <ListItemIcon>  <Article /> </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>

        <ListItem button component={Link} to="/informe" selected={pathname === "/informe"}>
          <ListItemIcon> <Analytics />  </ListItemIcon>
          <ListItemText primary="Informes" />
        </ListItem>

        <ListItem button component={Link} to="/mapa" selected={pathname === "/mapa"}>
          <ListItemIcon> <LocationOn/> </ListItemIcon>
          <ListItemText primary="Geolocalización" />
        </ListItem>

        <ListItem button component={Link} to="/usuario" selected={pathname === "/usuario"}>
          <ListItemIcon>  <PeopleAlt />  </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>

        <ListItem button component={Link} to="/notificacion" selected={pathname === "/notificacion"}>
          <ListItemIcon> <NotificationsActive />   </ListItemIcon>
          <ListItemText primary="Notificación" />
        </ListItem>

        
      </List>
    </Drawer>
  );
}

/*
{auth.me?.is_staff && (
          <ListItem button component={Link} to="/admin/users" selected={pathname === "/admin/users"}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>
        )}
*/