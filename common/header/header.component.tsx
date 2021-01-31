
import React, { FC } from "react"
import { Button, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"
import { Menu } from '@material-ui/icons';

export const Header:FC = () => {
    return (
        <AppBar>
        <Toolbar>
            <IconButton color="inherit" aria-label="menu">
            <Menu />
            </IconButton>
            <Typography variant="h5" >
            Mini 
            Pantry
            Movement
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    )    
}