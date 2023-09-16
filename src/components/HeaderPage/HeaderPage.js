import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import "./HeaderPage.css";

export function HeaderPage(props) {
    const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

    return (
        <div className="header-page-admin">
            <Typography variant="h4">{title}</Typography>

            <Grid container spacing={1} justifyContent="flex-end">
                {btnTitle && (
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={btnClick}>
                            {btnTitle}
                        </Button>
                    </Grid>
                )}
                {btnTitleTwo && (
                    <Grid item>
                        <Button variant="contained" color="error" onClick={btnClickTwo}>
                            {btnTitleTwo}
                        </Button>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}
