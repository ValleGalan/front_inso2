import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText,IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Analytics,Article, LocationOn, NotificationsActive, PeopleAlt } from "@mui/icons-material";
import "./SideMenu.css";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();
    return (
    <div className="side-menu">
      <MenuLeft pathname={pathname}/>
      <div  className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;

  return (
    <Drawer variant="permanent"  anchor="left">
      <List className="side">
        <h1>CYBERSLEUTH</h1>
        <ListItem button component={Link} to="/reporte" selected={pathname === "/reporte"}>
          <ListItemIcon>  <Article style={{ color: 'white' }}  /> </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>

        <ListItem button component={Link} to="/informe" selected={pathname === "/informe"}>
          <ListItemIcon> <Analytics style={{ color: 'white' }}/>  </ListItemIcon>
          <ListItemText primary="Informes" />
        </ListItem>

        <ListItem button component={Link} to="/geolocalizacion" selected={pathname === "/geolocalizacion"}>
          <ListItemIcon> <LocationOn style={{ color: 'white' }}/> </ListItemIcon>
          <ListItemText primary="Geolocalización" />
        </ListItem>

        <ListItem button component={Link} to="/usuario" selected={pathname === "/usuario"}>
          <ListItemIcon>  <PeopleAlt style={{ color: 'white' }}/>  </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>

        <ListItem button component={Link} to="/notificacion" selected={pathname === "/notificacion"}>
          <ListItemIcon> <NotificationsActive style={{ color: 'white' }}/>   </ListItemIcon>
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