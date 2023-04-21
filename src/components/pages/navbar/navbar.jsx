import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="/icon-img/logo.png"/>
                </IconButton>
                <Typography variant="h6" component='div'>
                    Meisho
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar

// Este es el navbar