import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'
import React from 'react'

 
const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#4F5D3C'}}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="/icon-img/logo2-1.png" alt='Logo' width='60px'/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    Meisho
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'> Features </Button>
                    <Button color='inherit'> Features </Button>
                    <Button color='inherit'> Features </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar

// Este es el navbar